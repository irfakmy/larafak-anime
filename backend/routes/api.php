<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AnimeController;
use Illuminate\Support\Facades\Route;


// Route::get('/animes', [AnimeController::class, 'index']);
// Route::get('/animepicture/{id}', [AnimeController::class, 'getPicture']); 

Route::get('/animes', [AnimeController::class, 'getAnimes']);
Route::get('/anime/{id}', [AnimeController::class, 'getAnimeDetail']);


