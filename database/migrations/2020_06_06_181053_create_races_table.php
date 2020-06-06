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
            $table->string('wind')->nullable();
            $table->string('overcast')->nullable();
            $table->string('rainfall')->nullable();
            $table->int('year');
            $table->string('type');
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
