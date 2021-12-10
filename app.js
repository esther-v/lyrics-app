const base_url = 'https://api.lyrics.ovh/'

const searchBtn = document.querySelector('#search')
const form = document.querySelector('#form')


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
}
