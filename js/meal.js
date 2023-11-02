const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchTesxt = searchField.value;
    console.log(searchTesxt);
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTesxt}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodResult(data.meals));
}

const displayFoodResult = meals => {

    const searchResult = document.getElementById('food-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p> ${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;

        searchResult.appendChild(div);
    })
}