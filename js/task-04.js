
const pluseBtn = document.querySelector('[data-action="increment"]');

// ===============================================
const counterInnerText = document.querySelector("#value");

let counterValue = 0;

// ===============================================
const minusBtn = document.querySelector('[data-action="decrement"]');


function handleClick1(event) {
    counterValue += 1;
    counterInnerText.textContent = counterValue;
 }

function handleClick2(event) {
    counterValue -= 1;
    counterInnerText.textContent = counterValue;
 }


pluseBtn.addEventListener("click", handleClick1);
minusBtn.addEventListener("click", handleClick2);

  
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.