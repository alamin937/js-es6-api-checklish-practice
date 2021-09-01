const photo = () =>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => photosArea(data))
}

photo();

const photosArea = photos =>{
    console.log(photos)
    const photoAreas = document.getElementById('photo-area')
   for(const photo of photos){
      const div = document.createElement('div');
      div.classList.add ='col'
      div.innerHTML = `
                <div onclick="mainArea('${photo.id}')" class="card">
                <img src="${photo.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
      `
      photoAreas.appendChild(div)
   }
}

const mainArea = id =>{
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>photoAll(data))
}

const photoAll = data =>{
    const detailsArea = document.getElementById('details-area');
    detailsArea.textContent = '' ;
    const div = document.createElement('div');
    div.classList.add= 'card'
                div.innerHTML = `
                <img height='200px' src="${data.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
    `
    detailsArea.appendChild(div)
}