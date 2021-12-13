const base_url = 'https://api.lyrics.ovh/'

const searchBtn = document.querySelector('#search')
const form = document.querySelector('#form')
const results = document.querySelector(".results")


//get search value
form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchValue = searchBtn.value.trim()

    if(!searchValue) {
        alert("Please enter a value")
    } else {
        searchSongs(searchValue)
    }
})

//function search
async function searchSongs(searchValue) {
    const searchResults = await fetch(`${base_url}/suggest/${searchValue}`)
    const data = await searchResults.json()

    console.log(data)
    displaySongs(data)
}

//display the results
function displaySongs(data) {
    results.innerHTML = `
  
        ${data.data
        .map(song => `
       
            <div class="song">
                <div>
                    <strong>${song.artist.name}</strong>
                    <p>${song.title}</p>
                </div>
                <button data-artist="${song.artist.name}" data-songtitle="${song.title}">Lyrics</button>   
            </div>
               
        `).join('')}
    `
}

//button to get lyrics
results.addEventListener('click', e => {
    const clickedBtn = e.target
    if(clickedBtn.tagName === 'BUTTON') {
        const artist = clickedBtn.getAttribute('data-artist')
        const songTitle = clickedBtn.getAttribute('data-songtitle')
        console.log(artist, songTitle)
    }
})
