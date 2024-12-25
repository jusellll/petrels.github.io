// Ambil elemen form dan messageContainer
const messageForm = document.getElementById('messageForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('messageContainer');

// Menangani pengiriman pesan
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const message = messageInput.value;

    // Membuat elemen untuk pesan baru
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${name}</strong>: <p>${message}</p>`;

    // Menambahkan pesan ke dalam container
    messageContainer.appendChild(messageElement);

    // Kosongkan form setelah pesan dikirim
    nameInput.value = '';
    messageInput.value = '';
});
