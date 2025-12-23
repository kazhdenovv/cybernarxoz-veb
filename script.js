document.addEventListener('DOMContentLoaded', () => {
    // Live батырмасы
    const liveBtn = document.querySelector('.btn-live');
    if(liveBtn) {
        liveBtn.addEventListener('click', () => {
            alert('Сайт жаңартылуда! LIVE трансляция жақын арада қолжетімді болады.');
        });
    }

    // Кері байланыс
    const contactBtn = document.querySelector('.btn-contact');
    if(contactBtn) {
        contactBtn.addEventListener('click', () => {
            prompt('Біз сізге хабарласу үшін телефон нөміріңізді қалдырыңыз:');
            alert('Рақмет! Мәлімет қабылданды.');
        });
    }

    // Чат-бот
    const chatBot = document.getElementById('chatBot');
    if(chatBot) {
        chatBot.addEventListener('click', () => {
            alert('Сәлем! Мен Cyber Narxoz көмекшісімін. Қандай сұрағыңыз бар?');
        });
    }
});