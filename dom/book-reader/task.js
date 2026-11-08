const book = document.getElementById('book');
const fontSizeButtons = document.querySelectorAll('.font-size');
const colorButtons = document.querySelectorAll('.color');

fontSizeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));
    event.currentTarget.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');
    const size = event.currentTarget.dataset.size;
    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});

colorButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    colorButtons.forEach(btn => btn.classList.remove('color_active'));
    event.currentTarget.classList.add('color_active');
    book.classList.remove(
      'book_color-black', 'book_color-gray', 'book_color-whitesmoke',
      'book_bg-black', 'book_bg-gray', 'book_bg-white'
    );
    const textColor = event.currentTarget.dataset.textColor;
    if (textColor) {
      book.classList.add(`book_color-${textColor}`);
    }
    const bgColor = event.currentTarget.dataset.bgColor;
    if (bgColor) {
      book.classList.add(`book_bg-${bgColor}`);
    }
  });
});