let flamenco = document.querySelector("#queso")
let guitar = document.querySelector("#salsa")
        guitar.addEventListener('submit', function(){
        let maraca = flamenco.value
        event.preventDefault();
        console.log(maraca)
        let url= 'https://itunes.apple.com/search?term=' + maraca + "&media=music" + "&limit=10"
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
    console.log(blues.results)
   buildProfile(blues.results)
})
}

function buildProfile (jazzy) {
    if (nigo.innerText != null) {
        killEm()
    }
    console.log(jazzy)
    let hipHop = document.createElement('div')
    hipHop.classList.add("searchResults")
    nigo.appendChild(hipHop)
    for (let jazz of (jazzy)) {
        let saxElement = document.createElement('img')
        saxElement.classList.add("albumArt")
        saxElement.src = jazz.artworkUrl100
        saxElement.addEventListener("click", function () {
            let celloElement = document.querySelector("#player")
            celloElement.src = jazz.previewUrl
        }
        )
        hipHop.appendChild(saxElement)
        let jazzyElement = document.createElement('div')
        jazzyElement.classList.add('result')
        jazzyElement.innerText = jazz.artistName +' ' + jazz.trackName
        hipHop.appendChild(jazzyElement)
    }
}

function killEm () {
    nigo.innerText = null;
}
// Making our HTML divs into values here
let ichigo = document.querySelector('#ichi')
let nigo = document.querySelector("#ni")