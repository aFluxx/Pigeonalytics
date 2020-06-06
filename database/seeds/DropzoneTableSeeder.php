<?php

use Illuminate\Database\Seeder;

class DropzoneTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Dropzone::class, 25)->create();
    }
}
