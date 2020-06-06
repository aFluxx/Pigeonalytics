<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dropzone;
use Faker\Generator as Faker;

$factory->define(Dropzone::class, function (Faker $faker) {
    return [
        'name' => $faker->state . ' ' . $faker->state,
        'distance' => $faker->numberBetween($min = 100000, $max = 500000),
    ];
});
