document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.experience_accordion');
    
    if (window.innerWidth >= 768) {
        accordions.forEach(acc => acc.setAttribute('open', 'true'));
    }
});


