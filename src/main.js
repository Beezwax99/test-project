import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
  
    if (burger) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
      });
    }

    const btn = document.querySelector('.hero__btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const nextSection = document.querySelector('.hero__btn').closest('section').nextElementSibling;
  
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

});
  