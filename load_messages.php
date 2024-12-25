<?php
// Sertakan konfigurasi database
include 'db_config.php';

// Query untuk mengambil pesan dari tabel `messages`
$sql = "SELECT name, message, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

// Periksa apakah ada data
if ($result->num_rows > 0) {
    // Tampilkan pesan satu per satu
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
