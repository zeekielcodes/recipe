document.querySelector("form").addEventListener("submit", GetRecipe)


function GetRecipe() {
    const SearchValue = document.querySelector("#search").value;
try {
     fetch(`https://api.edamam.com/search?q=${SearchValue}&app_id=54746f42&app_key=ee2be6bd51262229750b0f60e65f89a0&to=20`, {
        method: "POST",
        header: {
            "Access-Control-Allow-Origin" : true
        }
     })
     .then(response => response.json()
   )
    .then(data => {
        console.log(data)
        const Food = data.hits;
        DesignOutput(Food, SearchValue)
    })
    .catch(error => console.log(error.message))

} catch {}

document.querySelector("#search").value = "";
}

function DesignOutput(Food, SearchValue) {
    const Container = document.querySelector(".container");
    Container.innerHTML = "";
    for(let i=0; i<Food.length; i++) {
         console.log(Food[i].recipe.label)

         const Recipe = document.createElement("div");
         Recipe.setAttribute("class", "recipe")

         const Thumbnail = document.createElement("img");
         Thumbnail.src = Food[i].recipe.image;

        const Details = document.createElement("div");
        Details.setAttribute("class", "recipe-details");

        const Name = document.createElement("h2");
        Name.innerHTML = Food[i].recipe.label;

        const recipes = document.createElement("p");
        recipes.innerHTML = Food[i].recipe.ingredientLines.join("<br/> ")

        const Source = document.createElement("h3")
        Source.innerHTML = `Source : ${Food[i].recipe.source}`

        const Visit = document.createElement("a")
        Visit.href = Food[i].recipe.url;
        Visit.innerHTML = "Visit Source"


        Details.append(Name);
        Details.append(recipes)
        Details.append(Source)
        Details.append(Visit)


        Recipe.append(Thumbnail);
        Recipe.append(Details);

        

        Container.append(Recipe)

    }

    if(Food.length<1) {
        document.querySelector("h2.search").innerHTML = `No search results for "${SearchValue}"`
    } else {
        document.querySelector("h2.search").innerHTML = `Showing ${Food.length} search results for "${SearchValue}"`
    }
   


}

// DesignOutput()