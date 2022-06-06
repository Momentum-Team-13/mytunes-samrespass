let url = 'https://itunes.apple.com/search?'
let ichigo = document.querySelector('#ichi')
let nigo = document.querySelector("#ni")
let saxophone = fetch(url, {
    "method": "GET",
    "headers": {"content-type": "application/json"} 
})
.then(function (response){
    return response.json()}
    ) 
.then(function (blues){
   buildProfile(blues)
   whyNot(blues)
})
function buildProfile (jazzy) {
    console.log(jazzy)
    let hipHop = document.createElement('div')
    hipHop.classList.add("searchResults")
    nigo.appendChild(hipHop)
} 

function whyNot (jazzy) {
    let flamenco = document.querySelector("#salsa") 
        flamenco.addEventListener('submit', function(){
        let maraca = flamenco.value;
        console.log(flamenco)
        event.preventDefault();
        let url = 'https://itunes.apple.com/search?' + 'term=' + flamenco.value
        console.log(url)
        })
    }

// Making our HTML divs into values here
