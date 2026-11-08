const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');

  valueElement.addEventListener('click', () => {
    document.querySelectorAll('.dropdown__list').forEach(otherList => {
      if (otherList !== listElement) {
        otherList.classList.remove('dropdown__list_active');
      }
    });

    listElement.classList.toggle('dropdown__list_active');
  });

  listElement.addEventListener('click', (event) => {
    const link = event.target.closest('.dropdown__link');

    if (link) {
      event.preventDefault();

      valueElement.textContent = link.textContent;

      listElement.classList.remove('dropdown__list_active');
    }
  });
});