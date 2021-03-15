<?php

namespace App;

use App\Pigeon;
use App\Race;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['pigeon', 'race'];

    protected $guarded = [];

    public function race()
    {
        return $this->belongsTo(Race::class, 'race_id', 'id');
    }

    public function pigeon()
    {
        return $this->belongsTo(Pigeon::class);
    }

    /**
     * Calculate the interval in minutes for a given result
     */
    public function calculateInterval(string $unloadingTime, string $arrivalTime): float
    {
        $parsedUnloadingTime = Carbon::parse($unloadingTime);
        $parsedArrivalTime = Carbon::parse($arrivalTime);
        $interval = $parsedUnloadingTime->diffInSeconds($parsedArrivalTime) / 60;

        return $interval;
    }

    /**
     * Calculate the meters per minutes for a given result
     */
    public function calculateMeterPerMinute(Race $raceObject, float $interval): float
    {
        $mpm = $raceObject->dropzone->distance / $interval;

        return $mpm;
    }
}
