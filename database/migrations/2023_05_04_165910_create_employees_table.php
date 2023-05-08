<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->unsignedBigInteger('id', 50);
            $table->string('employee_name', 90);
            $table->string('employee_email', 225)->unique();
            $table->string('employee_mobile', 17); //+243-806-000-0000
            // $table->string('employee_username', 20)->unique();
            $table->string('employee_password');
            $table->text('employee_address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations. cd project5
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
