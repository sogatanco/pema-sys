<?php
namespace App\Http\Resources;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class KodeExpire {
        /**
         * Generate token dengan waktu kadaluwarsa.
         *
         * @param int $expirationTimeSeconds
         * @return string
         */
        public static function generateToken($expirationTimeSeconds = 3600)
        {
            $token = Str::random(32); // Gunakan metode sesuai kebutuhan Anda
    
            // Simpan token ke dalam cache dengan waktu kadaluwarsa
            Cache::put($token, true, now()->addSeconds($expirationTimeSeconds));
    
            return $token;
        }
    
        /**
         * Cek apakah token masih berlaku.
         *
         * @param string $token
         * @return bool
         */
        public static function isTokenValid($token)
        {
            return Cache::has($token);
        }
    
        /**
         * Hapus token dari cache.
         *
         * @param string $token
         * @return void
         */
        public static function invalidateToken($token)
        {
            Cache::forget($token);
        }
}