<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class AnimeController extends Controller
{
    public function getAnimes()
    {
        return Cache::remember('top_animes', 3600, function () {
            $response = Http::get("https://api.jikan.moe/v4/top/anime");
            return $response->successful() ? $response->json() : [];
        });
    }

    public function getAnimeDetail($id)
    {
        return Cache::remember("anime_detail_{$id}", 3600, function () use ($id) {
            //data anime lengkap
            $animeResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/full");
            $animeData = $animeResponse->successful() ? $animeResponse->json() : null;

            //data video anime
            $videoResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/videos");
            $videoData = $videoResponse->successful() ? $videoResponse->json() : [];

            //data episode
            $episodeResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/episodes");
            $episodeData = $episodeResponse->successful() ? $episodeResponse->json() : [];

            return [
                'anime' => $animeData['data'] ?? [],
                'videos' => $videoData['data']['promo']?? [],
                'episodes' => $episodeData['data'] ?? []
            ];
        });
    }
}
