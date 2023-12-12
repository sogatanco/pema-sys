<?php

namespace App\Http\Resources;

use Firebase\JWT\JWT;

class KodeExpire
{
    public static function generateToken($data)
    {
        $secretKey = 'wahyudin';

        // Data to be included in the token
        // $data = [
        //     'user_id' => 123,
        //     'username' => 'john_doe',
        // ];

        // Generate a token
        $token = JWT::encode($data, $secretKey, 'HS256');


        return $token;
    }

    public static function verifyToken($token)
    {
        // Mengecek apakah token sesuai dengan data
        if (password_verify($token, $hashedToken)) {
            // Memvalidasi waktu
            $data = json_decode($hashedToken, true);
            $timestamp = $data['timestamp'];

            // Contoh: Memeriksa apakah token masih berlaku selama 1 jam
            $expirationTime = 3600; // 1 jam dalam detik
            if (time() - $timestamp <= $expirationTime) {
                echo "Token valid dan belum kadaluwarsa.\n";
            } else {
                echo "Token kadaluwarsa.\n";
            }
        } else {
            echo "Token tidak valid.\n";
        }
    }
}
