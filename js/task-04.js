
const pluseBtn = document.querySelector('[data-action="increment"]');

// ===============================================
const counterInnerText = document.querySelector("#value");

let counterValue = 0;

// ===============================================
const minusBtn = document.querySelector('[data-action="decrement"]');


function handleClick1() {
    counterValue += 1;
    counterInnerText.textContent = counterValue;
 }

function handleClick2() {
    counterValue -= 1;
    counterInnerText.textContent = counterValue;
 }


// function handleClick(event) {
// console.dir(pluseBtn);
// console.dir(event);
// console.dir(minusBtn);

//     if (pluseBtn. == true) {
//         counterValue += 1;
//         counterInnerText.textContent = counterValue;
//         // return pluseBtn;
//     } if (minusBtn.clicked == true) {
//         counterValue -= 1;
//         counterInnerText.textContent = counterValue;
//         // return pluseBtn;
//     }
// // //    return counterValue.reduce((acc,counterValue) => acc + counterValue, 0)
//   };
//   document.getElementById('button').clicked == true
pluseBtn.addEventListener("click", handleClick1);
minusBtn.addEventListener("click", handleClick2);

  
// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.