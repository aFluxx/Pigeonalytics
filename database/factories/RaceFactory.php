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
        'amount_of_pigeons_personal' => $faker->numberBetween($min = 10, $max = 30),
        'amount_of_pigeons_club' => $faker->numberBetween($min = 100, $max = 400),
        'amount_of_pigeons_provincial' => $faker->numberBetween($min = 600, $max = 4000),
        'amount_of_pigeons_zone' => $faker->numberBetween($min = 1500, $max = 9000),
        'amount_of_pigeons_national' => $faker->numberBetween($min = 10000, $max = 25000),
        'unloading_time' => $date->format('Y-m-d H:i:s'),
    ];
});
