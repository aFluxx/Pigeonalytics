<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dropzone;
use App\Race;
use Faker\Generator as Faker;

$factory->define(Race::class, function (Faker $faker) {
    $dropzone = Dropzone::where('id', rand(1, 25))->first();
    $date = $faker->dateTimeThisDecade($max = '2019-12-25 13:00:00', $timezone = null);

    return [
        'dropzone_id' => $dropzone->id,
        'wind' => 'north',
        'overcast' => 'no_clouds',
        'rainfall' => 'no_rain',
        'year' => $date->format('Y'),
        'type' => $faker->randomElement($array = ['training', 'competitition']),
        'amount_of_pigeons' => $faker->numberBetween($min = 15000, $max = 21000),
        'unloading_time' => $date->format('Y-m-d H:i:s'),
    ];
});
