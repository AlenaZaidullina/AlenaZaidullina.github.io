document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.experience_accordion');
    
    function handleResize() {
        accordions.forEach(acc => {
            if (window.innerWidth >= 768) {
                acc.setAttribute('open', 'true'); // Всегда открыто на ПК
            } else {
                acc.removeAttribute('open'); // Закрыто на мобильных при загрузке
            }
        });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Запуск при старте страницы
});
