<?php
include 'db_config.php';

if ($conn) {
    echo "Koneksi ke database berhasil!";
} else {
    echo "Koneksi gagal!";
}
?>
