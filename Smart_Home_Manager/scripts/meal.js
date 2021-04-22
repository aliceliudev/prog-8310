
var config = {
    apiURL: 'https://www.themealdb.com/api/json/v1/1/random.php',
    // updateInterval: 15
};

// document.addEventListener('DOMContentLoaded', function() {
//     fetchData();
//     // setInterval(fetchData, config.updateInterval * 1000);
// });


var fetchData = function() {

    fetch(config.apiURL)
        .then(response => response.json())
        .then(res => {
            createMeal(res.meals[0]);
        });
};

console.log(fetchData);
// var renderData = function(meal) {
//     Object.keys(meal.value.joke).forEach(key => {
//         console.log(data.value.joke);
//         const _jokeContainer = document.querySelector('#jokeContainer');
//         _jokeContainer.innerHTML = data.value.joke;

//     });
// };



// getMealBtn.addEventListener("click", () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//         .then(res => res.json())
//         .then(res => {
//             createMeal(res.meals[0]);
//         });
// });

window.onload = function() {
    document.querySelector("#meal").focus();
    let _getMealBtn = document.getElementById("get_meal");

    _getMealBtn.onclick = fetchData;


};

var createMeal = (meal) => {
    var ingredients = [];
    // Get all ingredients from the object. Up to 20
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            // Stop if no more ingredients
            break;
        }
    }

    const newInnerHTML = `
		<div class="card">
        <div class="imgIngredients">
			<div class="img card">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}

			</div>
            <div class="ingredients card">
            <h3>Ingredients:</h3>
            <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
               
            </ul>
        
            </div>
        </div>
			<div class="description card">
            <h3>Steps:</h3>
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
	
	`;
    var _mealContainer = document.querySelector("#meal");
    _mealContainer.innerHTML = newInnerHTML;
};






