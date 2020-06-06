<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pigeon;
use Faker\Generator as Faker;

$factory->define(Pigeon::class, function (Faker $faker) {
    return [
        'ringnumber' => 'BE-' . $faker->numberBetween($min = 18, $max = 20) . '-' . $faker->numberBetween($min = 1000000, $max = 9999999),
    ];
});
