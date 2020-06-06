<?php

namespace App;

use App\Pigeon;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $guarded = [];

    public function race()
    {
        return $this->belongsTo(Race::class);
    }

    public function pigeon()
    {
        return $this->belongsTo(Pigeon::class);
    }

    /**
     * Calculate the interval in minutes for a given result
     *
     * @param Race $raceObject
     * @param string $arrivalTime
     * @return float $interval
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
     *
     * @param Race $raceObject
     * @param float $interval
     * @return float $mpm
     */
    public function calculateMeterPerMinute(Race $raceObject, float $interval): float
    {
        $mpm = $raceObject->dropzone->distance / $interval;

        return $mpm;
    }
}
