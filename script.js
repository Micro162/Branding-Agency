const elements = document.querySelectorAll('.conteinerFotoOne, .conteinerFotoThree, .conteinerFoto5, .conteinerFoto6, .conteinerFoto8, .conteinerFoto9, .conteinerFoto12');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

elements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});