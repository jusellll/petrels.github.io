document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("messageForm");
    const messageContainer = document.getElementById("messageContainer");

    // Muat pesan yang tersimpan
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messageContainer.innerHTML = "";
        messages.forEach(({ name, text }) => {
            const messageBox = document.createElement("div");
            messageBox.className = "message-box";
            messageBox.innerHTML = `
                <div class="name">${name}</div>
                <div class="text">${text}</div>
            `;
            messageContainer.appendChild(messageBox);
        });
    }

    // Simpan pesan baru
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const text = document.getElementById("message").value.trim();
        if (name && text) {
            const messages = JSON.parse(localStorage.getItem("messages")) || [];
            messages.push({ name, text });
            localStorage.setItem("messages", JSON.stringify(messages));
            loadMessages();
            form.reset();
        }
    });

    loadMessages();
});
