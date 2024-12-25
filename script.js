// Ambil elemen yang diperlukan
const messageForm = document.querySelector('form[action="https://formspree.io/f/YOUR_FORM_ID"]'); // Ganti dengan ID Formspree Anda
const nameInput = document.querySelector('input[name="name"]');
const messageInput = document.querySelector('textarea[name="message"]');
const messageContainer = document.getElementById('messageContainer');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Event listener untuk form pengiriman pesan
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        // Tidak perlu mencegah default, Formspree akan menangani pengiriman
        // event.preventDefault();

        // Ambil nama dan pesan
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Jika Anda ingin menampilkan pesan di UI setelah pengiriman
        if (name && message) {
            // Buat elemen pesan baru
            const messageBox = document.createElement('div');
            messageBox.classList.add('message-box');

            // Tambahkan nama pengirim
            const nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.textContent = name;
            messageBox.appendChild(nameElement);

            // Tambahkan pesan
            const messageElement = document.createElement('div');
            messageElement.classList.add('text');
            messageElement.textContent = message;
            messageBox.appendChild(messageElement);

            // Masukkan pesan ke dalam container
            messageContainer.appendChild(messageBox);

            // Kosongkan form setelah pengiriman
            nameInput.value = '';
            messageInput.value = '';
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
