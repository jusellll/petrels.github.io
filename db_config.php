<?php
// Konfigurasi database
$servername = "localhost";
$username = "root"; // Ubah jika username database berbeda
$password = ""; // Ubah jika ada password untuk MySQL
$dbname = "love_petrels"; // Nama database Anda

// Buat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
