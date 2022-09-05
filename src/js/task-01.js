

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.


const liItem = document.querySelectorAll(" #categories > .item");
// console.log(liItem);
const message  = `Number of categories ${liItem.length}`; 
console.log(message);
for (const listEl of liItem ) {
    let text1= listEl.querySelector("h2");
    let text2 = listEl.getElementsByTagName("li");
    console.log("Category:", text1.textContent);
    console.log("Elements:", text2.length);
}
    

// const h2 = document.querySelector("h2");
// console.log(h2.textContent);
// const ul = document.querySelector(".item > ul")
// ul.classList.add("list");
// const luItem = document.querySelectorAll(" .list > li");
// console.log(luItem);
// console.log(luItem.innerText);
// console.log(luItem.textContent);
// let text = document.getElementsByClassName("list");

// console.log(text);
// let text3 = document.getElementsByTagName("li").textContent;
// console.log(text3);
// const message2 = luItem.innerText;
// console.log(message2);




// liItem.firstElementChild 
// document.createElement(tagName);



