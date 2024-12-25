// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyCfqwEUyqSrDIn4EdRmxS1RZtjH5OQ9RYE",
  authDomain: "petrels-of-love.firebaseapp.com",
  projectId: "petrels-of-love",
  storageBucket: "petrels-of-love.firebasestorage.app",
  messagingSenderId: "599592042717",
  appId: "1:599592042717:web:1365cd940494e231d51b34",
  measurementId: "G-6QHL2TBSY3"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Ambil pesan dari database dan tampilkan
function fetchMessages() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan pesan

    database.ref('messages/').once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const messageData = childSnapshot.val();
            const messageBox = document.createElement('div');
            messageBox.classList.add('message-box');
            messageBox.innerHTML = `
                <div class="name">${messageData.name}</div>
                <div class="text">${messageData.message}</div>
            `;
            messageContainer.appendChild(messageBox);
        });
    });
}

// Kirim pesan ke database
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Simpan pesan ke database
    database.ref('messages/').push({
        name: name,
        message: message
    });

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});

// Panggil fungsi untuk mengambil pesan saat halaman dimuat
fetchMessages();

// Fungsi untuk toggle mode gelap
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
