<?php

// database/migrations/xxxx_xx_xx_xxxxxx_create_episodes_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEpisodesTable extends Migration
{
    public function up()
    {
        Schema::create('episodes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('anime_id')->constrained('animes')->onDelete('cascade');
            $table->string('title');
            $table->integer('episode_number');
            $table->string('video_url');
            $table->date('release_date');
            $table->string('release_schedule')->nullable();  // Menambahkan kolom jadwal rilis per episode
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('episodes');
    }
}

