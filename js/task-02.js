const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

console.log(list);

   const add = ingredients
        .map((ingredient) => {
          const add2 = document.createElement("li")
          add2.classList.add("item");
          add2.textContent = `${ingredient}`;
      return add2 });
     
  //.children.forEach(item => console.log(item))
list.append(...add);

// list.innerHTML = add;
console.log(add);



// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.