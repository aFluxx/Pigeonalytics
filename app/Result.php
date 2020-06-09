<?php

namespace App;

use App\Pigeon;
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

    // public function getPlacePersonalAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getPlaceClubAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getAmountPigeonsClubAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getPlaceProvincialAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getAmountPigeonsProvincialAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getPlaceZoneAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getAmountPigeonsZoneAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getPlaceNationalAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }

    // public function getAmountPigeonsNationalAttribute($value)
    // {
    //     if ($value === 1000000) {
    //         return '';
    //     }
    //     return $value;
    // }
}
