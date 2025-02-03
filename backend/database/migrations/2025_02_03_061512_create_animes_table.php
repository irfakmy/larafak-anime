<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimesTable extends Migration
{
    public function up()
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->date('release_date');
            $table->string('image_url');
            $table->enum('status', ['ongoing', 'completed', 'upcoming']);
            $table->decimal('rating', 3, 2)->nullable();  // Menambahkan kolom rating
            $table->string('release_schedule')->nullable();  // Menambahkan kolom jadwal rilis
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('animes');
    }
}
