<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DropzoneTableSeeder::class);
        $this->call(RaceTableSeeder::class);
        $this->call(PigeonTableSeeder::class);
        $this->call(ResultTableSeeder::class);
    }
}
