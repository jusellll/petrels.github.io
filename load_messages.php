<?php
// Sertakan file konfigurasi database
include 'db_config.php';

// Query untuk mengambil pesan
$sql = "SELECT name, message, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Tampilkan setiap pesan
    while ($row = $result->fetch_assoc()) {
        echo '<div class="message-box">';
        echo '<p><strong>' . htmlspecialchars($row['name']) . '</strong></p>';
        echo '<p>' . htmlspecialchars($row['message']) . '</p>';
        echo '<span class="timestamp">' . htmlspecialchars($row['created_at']) . '</span>';
        echo '</div>';
    }
} else {
    echo '<p>Belum ada pesan cinta.</p>';
}

$conn->close(); // Tutup koneksi
?>
