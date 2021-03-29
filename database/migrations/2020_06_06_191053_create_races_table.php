<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('races', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dropzone_id');
            $table->string('category');
            $table->string('type');
            $table->string('wind')->nullable();
            $table->string('wind_strength')->nullable();
            $table->string('overcast')->nullable();
            $table->string('rainfall')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_personal');
            $table->unsignedBigInteger('amount_of_pigeons_club')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_provincial')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_zone')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_national')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_regio')->nullable();
            $table->unsignedBigInteger('amount_of_pigeons_overkoepeling')->nullable();
            $table->datetime('unloading_time');
            $table->boolean('no_ace')->default(false);
            $table->unsignedBigInteger('year')->nullable();
            $table->timestamps();

            $table->foreign('dropzone_id')->references('id')->on('dropzones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('races');
    }
}
