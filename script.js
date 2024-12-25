const form = document.getElementById('messageForm');
const messageList = document.getElementById('messageList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const li = document.createElement('li');
    li.textContent = `${name}: ${message}`;
    messageList.appendChild(li);

    form.reset();
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
