//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[2])
      document.querySelector('h2').innerText = data.drinks[1].strDrink
      document.querySelector('img').src = data.drinks[1].strDrinkThumb
      document.querySelector('.ingredients1').innerText = data.drinks[1].strIngredient1
      document.querySelector('.ingredients2').innerText = data.drinks[1].strIngredient2
      document.querySelector('.ingredients3').innerText = data.drinks[1].strIngredient3
      document.querySelector('.ingredients4').innerText = data.drinks[1].strIngredient4
      document.querySelector('h3').innerText = data.drinks[1].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });