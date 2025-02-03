<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AnimeController;
use Illuminate\Support\Facades\Route;


Route::get('/animes', [AnimeController::class, 'index']);  // Route untuk mengambil daftar anime
Route::get('/animepicture/{id}', [AnimeController::class, 'getPicture']); // Route untuk mengambil gambar anime

