document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        const chatWindow = document.getElementById('chat-window');

        // Добавление сообщения пользователя в окно чата
        const userMessageDiv = document.createElement('div');
        userMessageDiv.textContent = `Вы: ${message}`;
        userMessageDiv.style.textAlign = 'right';
        chatWindow.appendChild(userMessageDiv);

        // Отправка сообщения на сервер
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        const botResponse = data.response;

        // Добавление ответа ИИ в окно чата
        const botResponseDiv = document.createElement('div');
        botResponseDiv.textContent = `ИИ: ${botResponse}`;
        botResponseDiv.style.textAlign = 'left';
        chatWindow.appendChild(botResponseDiv);

        // Очистка поля ввода
        userInput.value = '';

        // Прокрутка чата вниз
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
