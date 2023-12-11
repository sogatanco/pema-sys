<?php

namespace App\Http\Resources;

class KodeExpire {
    private $kode;
    private $timestampCreated;
    private $expirationTime; // Waktu kadaluwarsa dalam detik

    public function __construct($expirationTime = 3600) {
        $this->expirationTime = $expirationTime;
    }

    public function generateKode() {
        $this->kode = uniqid(); // Gunakan metode yang sesuai untuk menghasilkan kode unik
        $this->timestampCreated = time();
    }

    public function isExpired() {
        $currentTime = time();
        $elapsedTime = $currentTime - $this->timestampCreated;

        return $elapsedTime > $this->expirationTime;
    }

    public function getKode() {
        return $this->kode;
    }
}