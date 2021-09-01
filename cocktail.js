const drinksArea = () =>{
    const inputArea = document.getElementById('input-area');
    const inputValue = inputArea.value;
    inputArea.value = '';
   if(inputValue == 0){
       console.log('write some thing')
   }
   else{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data =>loadDrink(data.drinks))
   }
}

const loadDrink = drink =>{
    console.log(drink)
    const cardArea = document.getElementById('card-area');
    if(drink.length == 0){
       
    }
    cardArea.textContent = '';
    drink.forEach(drinks => {
        const div = document.createElement('div');
        div.classList.add = 'col';
        div.innerHTML= `
                <div onclick="drinkAll('${drinks.idDrink}')" class="card">
                <img width='200px' src="${drinks.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${drinks.strGlass}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
        cardArea.appendChild(div)
    });
} 

const drinkAll = id =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => favDrinks(data.drinks[0]))
}

const favDrinks = data =>{
    const drinkDetails = document.getElementById('drink-details');
    drinkDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add = 'card'
    div.innerHTML= `
    <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.strDrink}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    `
    drinkDetails.appendChild(div)
}