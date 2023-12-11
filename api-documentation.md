## Vendor API

### send emaill
Link        | `GET` |`https://api.ptpema.co.id/api/auth2/resend/[id_user]`


# Nama Aplikasi API

## Deskripsi
Aplikasi XYZ API adalah layanan yang menyediakan akses ke berbagai fitur yang terkait dengan [deskripsi singkat aplikasi]. API ini memungkinkan pengembang untuk [tujuan utama API] dengan menggunakan HTTP.

## Endpoint Utama
`https://api.example.com/v1`

## Autentikasi
Untuk menggunakan API ini, Anda perlu mengirimkan token API dalam setiap permintaan. Token API dapat diperoleh dengan mendaftar di [link registrasi].

Setiap permintaan harus menyertakan header `Authorization` dengan nilai "Bearer [token_api]".

## Panduan Penggunaan

### 1. Mendapatkan Data
#### Permintaan
```http
GET /data
