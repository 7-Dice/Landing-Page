// ===== スクロールフェードインのみ =====
const scrollElements = document.querySelectorAll('.scroll-fade');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (el) => {
    el.classList.add('appear');
};

const hideScrollElement = (el) => {
    el.classList.remove('appear');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if(elementInView(el, 50)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
