function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.
// change-color и выводит значение цвета в span.color.

document.querySelector('.change-color').addEventListener('click', colorChange);

function colorChange() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  document.querySelector('span.color').textContent = bgColor;
}