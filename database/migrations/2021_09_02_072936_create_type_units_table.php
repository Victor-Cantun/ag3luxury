<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_units', function (Blueprint $table) {
            $table->id();
            $table->string('type_units');
            $table->string('slug')->nullable();
            $table->string('descripcion')->nullable();
            $table->integer('max_pax')->nullable();
            $table->integer('max_suitcases')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_units');
    }
}
