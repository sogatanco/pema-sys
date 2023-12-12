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
        $secretKey = 'wahyudin';
        try {
            $decoded = JWT::decode($token, $secretKey, 'HS256');
            return $decoded;
        } catch (Exception $e) {
            return 'Invalid token: ' . $e->getMessage();
        }
    }
}
