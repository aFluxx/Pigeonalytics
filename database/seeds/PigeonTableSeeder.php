<?php

use Illuminate\Database\Seeder;

class PigeonTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Pigeon::class, 200)->create();
    }
}
