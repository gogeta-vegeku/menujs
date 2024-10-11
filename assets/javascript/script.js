const ul = document.querySelector("#header-nav ul");
const menu1 = document.getElementById("menu1")
const menuPrincipale = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5"
];

const sousMenu1 = [
    "Sous Item 1", "Sous Item 2", "Sous Item 3"
]

let i = 0;

while (i < menuPrincipale.length) {

    // ul.innerHTML += "<li id='item"+i+"'>" + menuPrincipale[i] + "</li>"
    ul.innerHTML += `<li id="item${i}"${menuPrincipale[i]}></li>`;
    i++;
}


document.querySelector("#item0").addEventListener("click", function () { console.log("bonjour"); })







