

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
    

