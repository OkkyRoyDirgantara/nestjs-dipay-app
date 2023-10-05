# Aplikasi Technical Test Dipay

## Apliksi dubuat dengan requirement:
- NodeJS v18.12.1
- mongodb v4.0.3
- npm v9.8.1
- yarn v1.22.19
- nestjs v9.1.0

## Cara menjalankan aplikasi
- pastikan mongodb sudah terinstall dan berjalan
- ekstrak file zip
- masuk ke folder aplikasi
- jalankan perintah `yarn install`
- jalankan perintah `yarn start:dev`
- aplikasi akan berjalan di port 3000
- buka browser dan akses `http://localhost:3000`
- untuk membuat akun admin, akses `http://localhost:3000/api/admins` dengan method `POST` dan body sebagai berikut:
```
{
    "username": "admin",
    "password": "admin"
}
```
- selanjutnya tinggal menjalankan requirement yang ada di postman