<?php

use App\Race;
use Carbon\Carbon;

function calculateInterval(string $unloadingTime, string $arrivalTime): float
{
    $parsedUnloadingTime = Carbon::parse($unloadingTime);
    $parsedArrivalTime = Carbon::parse($arrivalTime);
    $interval = $parsedUnloadingTime->diffInSeconds($parsedArrivalTime) / 60;

    return $interval;
}

function calculateMeterPerMinute(Race $raceObject, float $interval): float
{
    $mpm = $raceObject->dropzone->distance / $interval;

    return $mpm;
}
