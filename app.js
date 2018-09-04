let apiUrl = 'https://dino-1-server.herokuapp.com/'

fetch(apiUrl)

    .then(function (response) {
        return response.json()

    })

    .then(function (myJson) {
        let title = []
        let pay = []
        let desc = []
        for (let i = 0; i < myJson.length; i++) {
            title.push(myJson[i]['title']);
            desc.push(myJson[i]['description']);
            pay.push(myJson[i]['pay']);
        }
        console.log(title);
        console.log(desc);
        console.log(pay);
    });

let list = document.querySelector("#job-listings");
let listItem = document.createElement("h1");
let pay = document.createElement("li");
let description = document.createElement("li");
let button = document.querySelector("submit");
button.addEventListener("click", doStuff(myJson))

function doStuff(myJson) {
    listItem.innerHTML = "title"
    pay.innerHTML = "pay"
    description.innerHTML = "description"

    listItem.appendChild(list);
    pay.appendChild(list);
    description.appendChild(list);
}