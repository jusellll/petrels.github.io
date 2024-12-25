<?php
// Sertakan file konfigurasi database
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form dan sanitasi input untuk menghindari XSS
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);

    // Siapkan query SQL
    $sql = "INSERT INTO messages (name, message) VALUES (?, ?)";

    // Gunakan prepared statement untuk menghindari SQL Injection
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("ss", $name, $message); // Bind parameter
        if ($stmt->execute()) {
            // Jika sukses, arahkan kembali ke halaman utama
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
