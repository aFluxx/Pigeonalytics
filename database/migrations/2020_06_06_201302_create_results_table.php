<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pigeon_id');
            $table->unsignedBigInteger('race_id');
            $table->datetime('arrival_time');
            $table->double('interval');
            $table->double('mpm');

            $table->unsignedBigInteger('place_personal')->nullable();

            $table->unsignedBigInteger('place_club')->nullable();
            $table->unsignedBigInteger('amount_pigeons_club')->nullable();
            $table->unsignedBigInteger('coefficient_club')->nullable();

            $table->unsignedBigInteger('place_provincial')->nullable();
            $table->unsignedBigInteger('amount_pigeons_provincial')->nullable();
            $table->unsignedBigInteger('coefficient_provincial')->nullable();

            $table->unsignedBigInteger('place_zone')->nullable();
            $table->unsignedBigInteger('amount_pigeons_zone')->nullable();
            $table->unsignedBigInteger('coefficient_zone')->nullable();

            $table->unsignedBigInteger('place_national')->nullable();
            $table->unsignedBigInteger('amount_pigeons_national')->nullable();
            $table->unsignedBigInteger('coefficient_national')->nullable();

            $table->timestamps();

            $table->foreign('pigeon_id')->references('id')->on('pigeons');
            $table->foreign('race_id')->references('id')->on('races');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('results');
    }
}
