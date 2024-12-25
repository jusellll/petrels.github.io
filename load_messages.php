<?php
include 'db_config.php';

$sql = "SELECT name, message, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='message-box'>";
        echo "<strong>" . htmlspecialchars($row['name']) . "</strong>: ";
        echo "<span>" . htmlspecialchars($row['message']) . "</span>";
        echo "<div class='timestamp'>" . $row['created_at'] . "</div>";
        echo "</div>";
    }
} else {
    echo "<p>Tidak ada pesan.</p>";
}

$conn->close();
?>
