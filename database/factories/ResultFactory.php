<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pigeon;
use App\Race;
use App\Result;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Result::class, function (Faker $faker) {
    $pigeon = Pigeon::where('id', rand(1, 200))->first();
    $race = Race::where('id', rand(1, 50))->first();

    $arrival_time = Carbon::parse($race->unloading_time)->addHours(rand(3, 6));
    $interval = calculateInterval($race->unloading_time, $arrival_time->format('Y-m-d H:i:s'));

    return [
        'pigeon_id' => $pigeon->id,
        'race_id' => $race->id,
        'arrival_time' => $arrival_time,
        'interval' => $interval,
        'mpm' => calculateMeterPerMinute($race, $interval),
    ];
});
