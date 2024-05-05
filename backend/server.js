// Импортируем необходимые модули
const express = require('express');
const cors = require('cors'); // Импортируем CORS

// Создаем приложение Express
const app = express();

// Подключаем CORS
app.use(cors());

// Middleware для обработки JSON данных в запросах
app.use(express.json());

// Обработчик POST-запросов на маршрут /submit
app.post('/submit', (req, res) => {
    // Получаем данные из запроса
    const { email, message } = req.body;

    // Проверяем, есть ли email и message
    if (!email || !message) {
        return res.status(400).json({ success: false, message: 'Email и сообщение обязательны для отправки' });
    }

    // Логируем данные (в продакшене рекомендуется логировать только по необходимости)
    console.log('Получены данные:', { email, message });

    // Здесь вы можете обработать данные, например, сохранить их в базу данных

    // Отправляем ответ клиенту
    res.json({ success: true, message: 'Сообщение успешно отправлено' });
});

// Обработчик для GET-запроса на корневой маршрут
app.get('/', (req, res) => {
    res.send('Добро пожаловать на сервер!');
});

// Запускаем сервер на порту 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
