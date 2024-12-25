// Ambil elemen yang diperlukan
const messageForm = document.querySelector('form[action="submit_message.php"]');
const nameInput = document.querySelector('input[name="name"]');
const messageInput = document.querySelector('textarea[name="message"]');
const messageContainer = document.getElementById('messageContainer');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Event listener untuk form pengiriman pesan
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Ambil nama dan pesan
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            // Kirim data ke server menggunakan fetch
            fetch('submit_message.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ name, message }),
            })
                .then((response) => response.json()) // Ubah ke JSON
                .then((data) => {
                    if (data.status === 'success') {
                        // Perbarui kontainer pesan setelah berhasil
                        const messageBox = document.createElement('div');
                        messageBox.classList.add('message-box');

                        // Tambahkan nama pengirim
                        const nameElement = document.createElement('div');
                        nameElement.classList.add('name');
                        nameElement.textContent = name;
                        messageBox.appendChild(nameElement);

                        // Tambahkan pesan
                        const message Element = document.createElement('div');
                        messageElement.classList.add('text');
                        messageElement.textContent = message;
                        messageBox.appendChild(messageElement);

                        // Masukkan pesan ke dalam container
                        messageContainer.appendChild(messageBox);

                        // Kosongkan form setelah pengiriman
                        nameInput.value = '';
                        messageInput.value = '';
                    } else {
                        alert('Gagal mengirim pesan: ' + data.message);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Gagal mengirim pesan. Coba lagi.');
                });
        }
    });
}

// Muat pesan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    fetch('load_messages.php')
        .then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Gagal memuat pesan dari server.');
            }
        })
        .then((data) => {
            // Tambahkan pesan yang dimuat ke kontainer
            messageContainer.innerHTML = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
