<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateResultsTableWithDefaultData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('results', function ($table) {
            $table->unsignedBigInteger('place_personal')->default(1000000)->change();

            $table->unsignedBigInteger('place_club')->default(1000000)->change();
            $table->float('coefficient_club')->default(1000000)->change();

            $table->unsignedBigInteger('place_provincial')->default(1000000)->change();
            $table->float('coefficient_provincial')->default(1000000)->change();

            $table->unsignedBigInteger('place_zone')->default(1000000)->change();
            $table->float('coefficient_zone')->default(1000000)->change();

            $table->unsignedBigInteger('place_national')->default(1000000)->change();
            $table->float('coefficient_national')->default(1000000)->change();

            $table->unsignedBigInteger('place_regio')->default(1000000)->change();
            $table->float('coefficient_regio')->default(1000000)->change();

            $table->unsignedBigInteger('place_overkoepeling')->default(1000000)->change();
            $table->float('coefficient_overkoepeling')->default(1000000)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('results', function ($table) {
            $table->unsignedBigInteger('place_personal')->default(0)->change();

            $table->unsignedBigInteger('place_club')->default(0)->change();
            $table->float('coefficient_club')->default(0)->change();

            $table->unsignedBigInteger('place_provincial')->default(0)->change();
            $table->float('coefficient_provincial')->default(0)->change();

            $table->unsignedBigInteger('place_zone')->default(0)->change();
            $table->float('coefficient_zone')->default(0)->change();

            $table->unsignedBigInteger('place_national')->default(0)->change();
            $table->float('coefficient_national')->default(0)->change();

            $table->unsignedBigInteger('place_regio')->default(0)->change();
            $table->float('coefficient_regio')->default(0)->change();

            $table->unsignedBigInteger('place_overkoepeling')->default(0)->change();
            $table->float('coefficient_overkoepeling')->default(0)->change();
        });
    }
}
