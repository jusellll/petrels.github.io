/ Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC7IewP1noMdBdTMxjAKBdbLpRw0hJ0mKw",
    authDomain: "petrels-of-love-730c4.firebaseapp.com",
    projectId: "petrels-of-love-730c4",
    storageBucket: "petrels-of-love-730c4.firebasestorage.app",
    messagingSenderId: "266391465679",
    appId: "1:266391465679:web:09472f343e7ebdca1e51ba",
    measurementId: "G-1HQCBEYCS3" // Optional
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fungsi untuk mengirim pesan
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const name = this.name.value;
        const message = this.message.value;

        // Tambahkan console.log untuk debugging
        console.log("Mengirim pesan:", name, message); // Menampilkan nama dan pesan di konsol

        // Menyimpan pesan ke Firestore
        db.collection('messages').add({
            name: name,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            this.reset(); // Reset formulir setelah pengiriman
            loadMessages(); // Memuat ulang pesan
        }).catch(error => {
            console.error("Error adding document: ", error);
        });
    });

    // Memuat pesan saat halaman dimuat
    loadMessages(); // Panggil fungsi loadMessages saat halaman dimuat
});

// Fungsi untuk memuat pesan dari Firestore
function loadMessages() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = ''; // Kosongkan kontainer sebelum memuat ulang

    db.collection('messages').orderBy('timestamp', 'desc').get().then((querySnapshot) => {
        console.log("Memuat pesan dari Firestore..."); // Log untuk debugging
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const messageElement = document.createElement('div');
            messageElement.innerHTML = `<strong>${data.name}</strong>: ${data.message}`;
            messageContainer.appendChild(messageElement);
        });
    }).catch(error => {
        console.error("Error loading messages: ", error);
    });
}

// Fungsi untuk mengaktifkan mode gelap
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fungsi untuk menampilkan pesan tersembunyi
function showHiddenMessage(message) {
    alert(message);
}
