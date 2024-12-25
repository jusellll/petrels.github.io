document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const messageContainer = document.getElementById('messageContainer');
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');

    messageBox.innerHTML = `
        <div class="name">${name}</div>
        <div class="text">${message}</div>
    `;

    messageContainer.appendChild(messageBox);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
