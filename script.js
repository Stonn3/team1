// Функция для отправки данных формы на сервер
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартное поведение формы

    // Получение значений из полей формы
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Отправка данных формы на сервер
    fetch('http://localhost:3001/submit', {
        method: 'POST', // Используем метод POST для отправки данных
        headers: {
            'Content-Type': 'application/json', // Устанавливаем заголовок, указывающий формат данных JSON
        },
        body: JSON.stringify({ email, message }), // Преобразуем данные в строку JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // Обработка ответа от сервера
        if (data.success) {
            alert(data.message);
            console.log('Ответ от сервера:', data);
        } else {
            alert('Ошибка: ' + data.message);
            console.log('Ответ от сервера:', data);
        }
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных.');
    });
});
