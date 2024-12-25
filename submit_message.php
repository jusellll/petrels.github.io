<?php
// Sertakan konfigurasi database
include 'db_config.php';

// Periksa apakah data dikirim melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form dan sanitasi untuk keamanan
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);

    // Query SQL untuk memasukkan data
    $sql = "INSERT INTO messages (name, message) VALUES (?, ?)";

    // Gunakan prepared statement untuk mencegah SQL Injection
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("ss", $name, $message); // Bind parameter
        if ($stmt->execute()) {
            // Jika berhasil, arahkan kembali ke halaman utama dengan pesan sukses
            header("Location: index.html?success=true");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close(); // Tutup statement
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close(); // Tutup koneksi
}
?>
