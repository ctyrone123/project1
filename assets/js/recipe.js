function getrecipe(q) {
  $.ajax({
      url: "https://api.spoonacular.com/recipes/search?apiKey=a568c4a88785422fbf4cf46b976c40e8&number=9&query=" + q,
      success: function (res) {
          for (var i = 0; i < 9; i++) {
              document.getElementById("output").innerHTML += "<div class='pure-u-1 pure-u-md-1-3'><h1>" + res.results[i].title + "</h1><br><a href='" + res.results[i].sourceUrl + "'><img class='pure-img' src='" + res.baseUri + res.results[i].image + "' width='400' /></a><br>Ready in " + res.results[i].readyInMinutes + " minutes</div>"
              console.log(q);
          }
      }
  });
}

function renderCocktail(){

    var queryURLCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
    url:queryURLCocktail,
    method: "GET"
  }).then(function(response) {
    console.log("response", response);
    var drink = response.drinks[0];
    var name = drink.strDrink;
    var image = drink.strDrinkThumb;
    var n = 0;
    var ingredients = [];
    var directions = drink.strInstructions;
    while (n<15) {
      if (drink[`strIngredient${n+1}`] === null){
        break;
      };
      ingredients.push(drink[`strIngredient${n+1}`]+": " + drink[`strMeasure${n+1}`]);
      ingredients[n] = ingredients[n].replace(": null", "");
      n++;
    };
    $("#name").html(`<h1>${name}</h1>`);
    $("#image").html(`<img src='${image}'/>`);
    $("#ingredients").html(ingredients.map(ingredient => `<li class="cocktail">${ingredient}</li>`).join(""));
    $("#directions").html(directions);
    $("#idk").html(`<button id="random-cocktail" class="idk btn" type="submit" onclick="renderCocktail(document.getElementById('random-cocktail').value)">Try Again!</button>`);
    console.log(ingredients);
  });
}
