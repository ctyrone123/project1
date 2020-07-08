var favoriteRecipes = document.getElementById("output2");
var savedRecipes = localStorage.getItem("favorites");

favoriteRecipes.innerHTML += savedRecipes;

document.getElementById("clear_favorites").addEventListener("click", function(){
    //set localtorage favoties to empty string
    
    $("output2").empty();
    localStorage.setItem("favorites", "");
    window.location.reload();
    //set favoriteRecipes.innerHTML to empty string.
  });