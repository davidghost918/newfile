document.addEventListener('DOMContentLoaded', () => {
    const addFadeInEffect = (selector, delay = 0) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('fade-in');
            setTimeout(() => {
                element.classList.add('visible');
            }, delay + index * 250);
        });
    };

    addFadeInEffect('header');
    addFadeInEffect('nav ul li', 500);
    addFadeInEffect('main h1', 750);
    addFadeInEffect('main p', 1000);

    if (document.body.contains(document.querySelector('.product-grid'))) {
        const products = [
            { name: 'Ноутбук', description: 'Высокопроизводительный ноутбук для игр.' },
            { name: 'Смартфон', description: 'Самая последняя версия всеми любимого яблока.' },
            { name: 'Наушники', description: 'Наушники с шумоподавлением.' },
            { name: 'Умные часы', description: 'Стильные и функциональные смарт-часы.' }
        ];

        const productGrid = document.querySelector('.product-grid');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
            productGrid.appendChild(productDiv);
        });

        addFadeInEffect('.product-grid div', 2500);
    }

    if (document.body.contains(document.querySelector('#contactForm'))) {
        const contactForm = document.querySelector('#contactForm');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Мы скоро свяжемся с Вами!');
            contactForm.reset();
        });

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                contactForm.querySelector('button').click();
            }
        });

        addFadeInEffect('#contactForm label', 2500);
        addFadeInEffect('#contactForm input, #contactForm textarea, #contactForm button', 3000);
    }
});
