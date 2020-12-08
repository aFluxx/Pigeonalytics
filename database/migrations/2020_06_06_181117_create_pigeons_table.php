<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePigeonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pigeons', function (Blueprint $table) {
            $table->id();

            $table->string('ringnumber');

            $table->string('ringnumber_father')->nullable();
            $table->unsignedBigInteger('father_id')->nullable();
            $table->string('ringnumber_mother')->nullable();
            $table->unsignedBigInteger('mother_id')->nullable();

            $table->string('gender');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pigeons');
    }
}
