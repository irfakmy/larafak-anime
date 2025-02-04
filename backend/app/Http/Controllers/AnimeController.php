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

            $animeResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/full");
            $animeData = $animeResponse->successful() ? $animeResponse->json() : null;

            $videoResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/videos");
            $videoData = $videoResponse->successful() ? $videoResponse->json() : [];

            $episodeResponse = Http::get("https://api.jikan.moe/v4/anime/{$id}/episodes");
            $episodeData = $episodeResponse->successful() ? $episodeResponse->json() : [];

            $genreResponse = Http::get("https://api.jikan.moe/v4/genres/anime");
            $genreData = $genreResponse -> successful() ? $genreResponse->json() :  [];
            
            return [
                'anime' => $animeData['data'] ?? [],
                'videos' => $videoData['data']['promo']?? [],
                'episodes' => $episodeData['data'] ?? [],
                'genres' => $genreData['data'] ?? []
            ];
        });
    }
    public function getAnimeGenres()
    {
        return Cache::remember('anime_genres', 3600, function () {
            $response = Http::get("https://api.jikan.moe/v4/genres/anime");
            return $response->successful() ? $response->json() : [];
        });
    }

}
