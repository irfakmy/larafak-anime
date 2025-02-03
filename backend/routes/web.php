<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimePictureController;

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\AnimeController;

Route::get('/animepicture/{id}', [AnimePictureController::class, 'show']);
