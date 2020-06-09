<?php

namespace App;

use App\Dropzone;
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
    protected $appends = ['wind_formatted', 'wind_strength_formatted', 'overcast_formatted', 'rainfall_formatted', 'type_formatted', 'category_formatted'];

    protected $guarded = [];

    public function dropzone()
    {
        return $this->belongsTo(Dropzone::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    /**
     * Properly format the wind attribute
     *
     * @param  string  $value
     * @return string
     */
    public function getWindFormattedAttribute()
    {
        switch ($this->wind) {
            case 'na':
                return '';
            case 'north':
                return 'North';
            case 'north_east':
                return "North East";
                break;
            case 'north_east':
                return "North East";
                break;
            case 'east':
                return "East";
                break;
            case 'south_east':
                return "South East";
                break;
            case 'south':
                return "South";
                break;
            case 'south_west':
                return "South West";
                break;
            case 'west':
                return "West";
                break;
            case 'north_west':
                return "North West";
                break;
        }
    }

    /**
     * Properly format the wind strength attribute
     *
     * @param  string  $value
     * @return string
     */
    public function getWindStrengthFormattedAttribute()
    {
        switch ($this->wind_strength) {
            case 'na':
                return '';
            case 'windless':
                return 'Windless';
            case 'light_breeze':
                return "Light breeze (licht)";
                break;
            case 'gentle_breeze':
                return "Gentle breeze (matig)";
                break;
            case 'strong_wind':
                return "Strong wind";
                break;
            case 'storm_wind':
                return "Storm wind";
                break;
        }
    }

    /**
     * Properly format the overcast attribute
     *
     * @param  string  $value
     * @return string
     */
    public function getOvercastFormattedAttribute()
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
     *
     * @param  string  $value
     * @return string
     */
    public function getRainfallFormattedAttribute()
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
     *
     * @param  string  $value
     * @return string
     */
    public function getTypeFormattedAttribute()
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
     *
     * @param  string  $value
     * @return string
     */
    public function getCategoryFormattedAttribute()
    {
        switch ($this->category) {
            case 'mix':
                return 'Mix';
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
