// Inisialisasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfqwEUyqSrDIn4EdRmxS1RZtjH5OQ9RYE",
    authDomain: "petrels-of-love.firebaseapp.com",
    databaseURL: "https://petrels-of-love.firebaseio.com",
    projectId: "petrels-of-love",
    storageBucket: "petrels-of-love.firebasestorage.app",
    messagingSenderId: "599592042717",
    appId: "1:599592042717:web:1365cd940494e231d51b34"
};

// Inisialisasi Firebase App
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Ambil elemen-elemen DOM
const messageForm = document.getElementById('messageForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('messageContainer');

// Fungsi untuk memuat pesan dari Firebase
function loadMessages() {
    // Mendapatkan data pesan dari Firebase Realtime Database
    const messagesRef = database.ref('messages');
    messagesRef.on('value', (snapshot) => {
        const messages = snapshot.val();
        messageContainer.innerHTML = ''; // Kosongkan container sebelum memuat pesan

        // Jika ada pesan
        if (messages) {
            Object.values(messages).forEach(msg => {
                const messageBox = document.createElement('div');
                messageBox.classList.add('message-box');

                const nameElement = document.createElement('div');
                nameElement.classList.add('name');
                nameElement.textContent = msg.name;
                messageBox.appendChild(nameElement);

                const messageElement = document.createElement('div');
                messageElement.classList.add('text');
                messageElement.textContent = msg.message;
                messageBox.appendChild(messageElement);

                messageContainer.appendChild(messageBox);
            });
        }
    });
}

// Panggil fungsi untuk memuat pesan saat halaman dimuat
loadMessages();

// Event listener untuk form pengiriman pesan
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        // Menyimpan pesan ke Firebase Realtime Database
        const newMessageRef = database.ref('messages').push();
        newMessageRef.set({
            name: name,
            message: message
        });

        // Kosongkan form setelah pengiriman
        nameInput.value = '';
        messageInput.value = '';
    }
});
