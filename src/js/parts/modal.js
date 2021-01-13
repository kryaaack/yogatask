function modal() {
    let btn = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    more = document.querySelectorAll('.description-btn');

btn.addEventListener('click', openModal);
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', openModal);
}
close.addEventListener('click', closeModal);

function openModal() {
    overlay.style.display = 'block';
    btn.classList.add = 'more-splash';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.style.display = '';
    btn.classList.remove = 'more-splash';
    document.body.style.overflow = '';
}
}

module.exports = modal;