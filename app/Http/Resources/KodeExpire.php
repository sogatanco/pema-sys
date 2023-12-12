<?php
namespace App\Http\Resources;

class KodeExpire {
    public function generateToken($data)
    {
        // Menambahkan data waktu ke dalam array data
        $data['timestamp'] = time();
    
        // Mengkonversi array data menjadi JSON
        $jsonData = json_encode($data);
    
        // Menghasilkan hash dari data JSON
        $token = password_hash($jsonData, PASSWORD_BCRYPT);
    
        return $token;
    }
    
    public function verifyToken($token)
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