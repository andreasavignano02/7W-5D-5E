async function listadisnaymovie() {
    
    let moviedisney = await fetch ('https://api.disneyapi.dev/characters?limit=100&offset=50')
    let trasformazionemovie = await moviedisney.json()
    let arraymovies =trasformazionemovie.data
    let contenitorepg = document.getElementById('container')
    for (let i = 0 ; i < arraymovies.length ; i++){
        contenitorepg.innerHTML += `<div class="stili"><img class="arrey-item" src="${arraymovies[i].imageUrl}" alt="disney"> ${arraymovies[i].name}</div>`
    }
}

window.onload = async() => {
    await listadisnaymovie()
}
