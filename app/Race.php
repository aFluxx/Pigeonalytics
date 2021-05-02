<?php

namespace App;

use App\Dropzone;
use App\Pigeon;
use App\Result;
use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['dropzone'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'wind_formatted',
        'wind_strength_formatted',
        'overcast_formatted',
        'rainfall_formatted',
        'type_formatted',
        'category_formatted'
    ];

    protected $guarded = [];

    public function dropzone()
    {
        return $this->belongsTo(Dropzone::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function closableResults()
    {
        return $this->hasMany(Result::class)->where('nominated', null);
    }

    /**
     * Properly format the wind attribute
     */
    public function getWindFormattedAttribute(): string
    {
        switch ($this->wind) {
            case 'na':
                return '';
            case 'north':
                return 'North';
            case 'north_east':
                return "North East";
            case 'north_north_east':
                return 'North North East';
            case 'north_east':
                return "North East";
            case 'east_north_east':
                return 'East North East';
            case 'east':
                return "East";
            case 'east_south_east':
                return 'East South East';
            case 'south_east':
                return "South East";
            case 'south_south_east':
                return 'South South East';
            case 'south':
                return "South";
            case 'south_south_west':
                return 'South South West';
            case 'south_west':
                return "South West";
            case 'west_south_west':
                return 'West South West';
            case 'west':
                return "West";
            case 'west_north_west':
                return 'West North West';
            case 'north_west':
                return "North West";
            case 'north_north_west':
                return 'North North West';
        }
    }

    /**
     * Properly format the wind strength attribute
     */
    public function getWindStrengthFormattedAttribute(): string
    {
        switch ($this->wind_strength) {
            case 'na':
                return '';
            case 'windless':
                return 'Windless (0 bft)';
            case 'light_breeze':
                return "Light breeze (licht 1-3 bft)";
                break;
            case 'gentle_breeze':
                return "Gentle breeze (matig 4-6 bft)";
                break;
            case 'strong_wind':
                return "Strong wind (7-8 bft)";
                break;
            case 'storm_wind':
                return "Storm wind (9-11 bft)";
                break;
        }
    }

    /**
     * Properly format the overcast attribute
     */
    public function getOvercastFormattedAttribute(): string
    {
        switch ($this->overcast) {
            case 'na':
                return '';
            case 'no_clouds':
                return 'No clouds';
            case 'very_light_clouds':
                return "Very light clouds";
                break;
            case 'light_clouds':
                return "Light clouds";
                break;
            case 'moderate_clouds':
                return "Moderate clouds";
                break;
            case 'heavy_clouds':
                return "Heavy clouds";
                break;
            case 'very_heavy_clouds':
                return "Very heavy clouds";
                break;
        }
    }

    /**
     * Properly format the rainfall attribute
     */
    public function getRainfallFormattedAttribute(): string
    {
        switch ($this->rainfall) {
            case 'na':
                return '';
            case 'no_rain':
                return 'No rain';
            case 'very_light_rain':
                return "Very light rain";
                break;
            case 'light_rain':
                return "Light rain";
                break;
            case 'moderate_rain':
                return "Moderate rain";
                break;
            case 'heavy_rain':
                return "Heavy rain";
                break;
            case 'very_heavy_rain':
                return "Very heavy rain";
                break;
            case 'downpour_hail':
                return "Downpour / Hail";
                break;
        }
    }

    /**
     * Properly format the type attribute
     */
    public function getTypeFormattedAttribute(): string
    {
        switch ($this->type) {
            case 'training':
                return 'Training';
            case 'competition':
                return "Competition";
                break;
        }
    }

    /**
     * Properly format the category attribute
     */
    public function getCategoryFormattedAttribute(): string
    {
        switch ($this->category) {
            case 'mix':
                return 'Mix Varia';
            case 'mix_yearling_old':
                return 'Mix Yearling / Old';
            case 'youngster':
                return "Youngsters";
            case 'yearlings':
                return "Yearlings";
            case 'old_birds':
                return "Old birds";
                break;
        }
    }
}
