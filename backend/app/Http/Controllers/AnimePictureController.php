<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnimePictureController extends Controller
{
    public function show($id)
    {
        // Mengakses API Jikan untuk mendapatkan data anime
        $response = Http::get("https://api.jikan.moe/v4/anime/{$id}");

        // Mengecek jika request berhasil
        if ($response->successful()) {
            // Mendapatkan URL gambar dari response JSON
            $data = $response->json();
            $imageUrl = $data['data']['images']['jpg']['image_url'];

            // Mengirimkan gambar ke view
            return view('animepicture.pictures', compact('imageUrl'));
        } else {
            // Menangani error jika request gagal
            return redirect()->back()->withErrors('Anime not found.');
        }
    }
}
