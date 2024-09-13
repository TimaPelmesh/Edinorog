document.addEventListener('DOMContentLoaded', function () {
    const sendDataButton = document.getElementById('send-data');

    sendDataButton.addEventListener('click', function () {
        const dataToSend = { key: 'value' }; // Здесь можно изменить данные для отправки

        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успех:', data);
            // Здесь вы можете обновить DOM или выполнить другие действия после успешной отправки
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });
    });
});
