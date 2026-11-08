const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  let activeCase = rotator.querySelector('.rotator__case_active');

  function rotate() {
    const speed = Number(activeCase.dataset.speed) || 1000;
    const color = activeCase.dataset.color;

    if (color) {
      activeCase.style.color = color;
    }

    setTimeout(() => {
      const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
      const currentIndex = cases.indexOf(activeCase);
      const nextIndex = (currentIndex + 1) % cases.length;
      const nextCase = cases[nextIndex];

      activeCase.classList.remove('rotator__case_active');
      nextCase.classList.add('rotator__case_active');
      
      activeCase = nextCase;
      rotate();
    }, speed);
  }

  rotate();
});