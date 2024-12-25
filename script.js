// Ambil form dan message container
const messageForm = document.getElementById('messageForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('messageContainer');

// Event listener untuk form pengiriman pesan
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nama dan pesan
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        // Buat elemen pesan
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
