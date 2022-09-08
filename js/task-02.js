const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
// const list = document.createElement("li");
console.log(list);


  // createdLi.textContent = ingredients(elements); //!!!!
  // ingredient.createElement("li");
  // ingredient.classList.add("item");
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

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.