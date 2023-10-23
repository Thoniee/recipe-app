const recipes = [
  {
    title: "Jollof Rice",
    description:
      "rice, onion, water, tomato, groundnut oil, maggi, salt, pepper, curry, thyme, crayfish.",
  },
  {
    title: "Yam Porridge",
    description: "yam, water, red oil, onion, salt, maggi, pepper, crayfish. ",
  },
  {
    title: "Spaghetti",
    description:
      "spaghetti, onion, water, tomato, groundnut oil, maggi, salt, pepper, curry, thyme, crayfish.",
  },
];

const recipeList = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");
const recipeTitle = document.querySelector("#recipe-title");
const recipeDescription = document.querySelector("#recipe-description");
const closeDetailsButton = document.querySelector("#close-details");
const recipeInput = document.querySelector(".recipe-input");
const inputDetails = document.querySelector("#input-details");
const ingredientInput = document.querySelector("#ingredient-input");

recipes.forEach((recipe) => {
  const recipeElement = document.createElement("div");
  recipeElement.classList.add("recipe");
  recipeElement.innerHTML = `
    <h2>${recipe.title}</h2>
      <button class="view-recipe">View Recipe</button>
    `;
  recipeList.appendChild(recipeElement);

  const viewRecipeButton = recipeElement.querySelector(".view-recipe");
  viewRecipeButton.addEventListener("click", () => {
    recipeTitle.textContent = recipe.title;
    recipeDescription.textContent = recipe.description;
    recipeInput.style.display = "none";
    recipeList.style.display = "none";
    recipeDetails.style.display = "block";
  });
});

closeDetailsButton.addEventListener("click", () => {
  recipeDetails.style.display = "none";
  recipeList.style.display = "flex";
  recipeInput.style.display = "";
});

const addButton = document.querySelector(".input-btn");
const inputValue = inputDetails.value;
const ingredientValue = ingredientInput.value;

addButton.addEventListener("click", () => {
  const obj = {};
  obj.title = inputDetails.value;
  obj.description = ingredientInput.value;

  const newRecipe = document.createElement("div");
  newRecipe.classList.add("recipe");
  newRecipe.innerHTML = `
    <h2>${obj.title}</h2>
      <button class="view-recipe">View Recipe</button>
    `;
  recipeList.appendChild(newRecipe);
  inputDetails.value = "";
  ingredientInput.value = "";

  const viewRecipeButton = newRecipe.querySelector(".view-recipe");
  viewRecipeButton.addEventListener("click", () => {
    recipeTitle.textContent = obj.title;
    recipeDescription.textContent = obj.description;
    recipeInput.style.display = "none";
    recipeList.style.display = "none";
    recipeDetails.style.display = "block";
  });
});
