<?php

use App\Models\Agency;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Schema;

class CreateAgenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agencies', function (Blueprint $table) {
            $table->id();
            $table->string('business_name', 100);
            $table->string('name_agency', 50)->nullable();
            $table->string('rfc',20)->unique();
            $table->string('address',120)->nullable();
            $table->string('telephone',10)->unique()->nullable();
            $table->string('email_agency')->unique()->nullable();
            $table->string('site_web')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('agency_logo')->default('assets/images/agencies/logo.png');
            $table->string('fiscal_situation')->nullable();
            $table->string('current_rate')->nullable();
            $table->string('proof_address')->nullable();
            $table->string('covenants')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agencies');
    }
}
