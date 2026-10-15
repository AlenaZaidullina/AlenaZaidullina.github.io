document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.experience_accordion');
    

    let lastWidth = window.innerWidth;

    function handleResize() {
        const currentWidth = window.innerWidth;


        if (currentWidth === lastWidth) return;
        

        lastWidth = currentWidth;

        accordions.forEach(acc => {
            if (currentWidth >= 768) {
                acc.setAttribute('open', 'true'); 
            } else {
                acc.removeAttribute('open'); 
            }
        });
    }


    window.addEventListener('resize', handleResize);
    

    accordions.forEach(acc => {
        if (window.innerWidth >= 768) {
            acc.setAttribute('open', 'true');
        } else {
            acc.removeAttribute('open');
        }
    });
});

