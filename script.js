document.querySelector("form").addEventListener("submit", GetRecipe)


function GetRecipe() {
    const SearchValue = document.querySelector("#search").value;
try {
     fetch(`https://api.edamam.com/search?q=${SearchValue}&app_id=065b5213&to=10`)
     .then(response => response.json()
   )
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

} catch {}
}

function DesignOutput() {

}