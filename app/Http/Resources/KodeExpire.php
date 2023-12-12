<?php

namespace App\Http\Resources;
use JWTAuth;

class KodeExpire
{
    public static function generateToken($data)
    {
        try {
            // Encode the payload and get the token
            $token = JWTAuth::encode($data);
            return $token;
        }catch(\Tymon\JWTAuth\Exceptions\JWTException $e){
            return $e;
        }   
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
