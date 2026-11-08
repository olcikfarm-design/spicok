const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      reveal.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();