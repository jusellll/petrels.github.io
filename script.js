const form = document.getElementById('messageForm');
const messageContainer = document.getElementById('messageContainer');

// Fungsi untuk memuat pesan dari Local Storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('publicMessages')) || [];
    messageContainer.innerHTML = ''; // Bersihkan container sebelum render
    messages.forEach(({ name, message }) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${name}</strong>: ${message}`;
        messageContainer.appendChild(messageElement);
    });
}

// Fungsi untuk menyimpan pesan ke Local Storage
function saveMessage(name, message) {
    const messages = JSON.parse(localStorage.getItem('publicMessages')) || [];
    messages.push({ name, message });
    localStorage.setItem('publicMessages', JSON.stringify(messages));
}

// Event listener untuk form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Simpan pesan ke Local Storage dan render ulang
    saveMessage(name, message);
    loadMessages();

    // Reset form
    form.reset();
});

// Fungsi untuk mengaktifkan mode gelap
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Memuat pesan saat halaman pertama kali dibuka
window.onload = loadMessages;
