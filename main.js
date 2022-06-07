let flamenco = document.querySelector("#queso")
let guitar = document.querySelector("#salsa")
        guitar.addEventListener('submit', function(){
        let maraca = flamenco.value
        event.preventDefault();
        console.log(maraca)
        let url= 'https://itunes.apple.com/search?term=' + maraca
        fetching(url)
        })

function fetching (url) {

fetch(url, {
    "method": "GET",
    "headers": {"content-type": "application/json"} 
})
.then(function (response){
    return response.json()}
    ) 
.then(function (blues){
   buildProfile(blues)
})
}

function buildProfile (jazzy) {
    console.log(jazzy)
    let hipHop = document.createElement('div')
    hipHop.classList.add("searchResults")
    nigo.appendChild(hipHop)
} 
// Making our HTML divs into values here
let ichigo = document.querySelector('#ichi')
let nigo = document.querySelector("#ni")