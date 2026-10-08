/* ============================================
   BURGER MENU
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';

        burger.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open', !isOpen);
        body.classList.toggle('menu-open', !isOpen);
    });

    // Закрываем меню при клике по ссылке
    const navLinks = nav.querySelectorAll('.header__nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            burger.setAttribute('aria-expanded', 'false');
            nav.classList.remove('is-open');
            body.classList.remove('menu-open');
        });
    });

    // Закрываем меню при клике вне его (по клику на body)
    document.addEventListener('click', function (e) {
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(e.target) || burger.contains(e.target)) return;

        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        body.classList.remove('menu-open');
    });
});