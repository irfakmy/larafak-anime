<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnimeController extends Controller
{
    public function index()
    {
        // Mengambil daftar anime dari API Jikan
        $response = Http::get("https://api.jikan.moe/v4/top/anime");

        if ($response->successful()) {
            $data = $response->json();
            return response()->json($data['data']); // Mengembalikan JSON ke React
        } else {
            return response()->json(['error' => 'Failed to fetch anime'], 500);
        }
    }

    public function getPicture($id)
    {
        // Mengambil gambar anime berdasarkan ID
        $response = Http::get("https://api.jikan.moe/v4/anime/{$id}");

        if ($response->successful()) {
            $data = $response->json();
            return response()->json(['image_url' => $data['data']['images']['jpg']['image_url']]);
        } else {
            return response()->json(['error' => 'Anime not found'], 404);
        }
    }
}

