document.addEventListener("DOMContentLoaded", ()=> {
    loadNavBar();
})

function loadNavBar(){
    const home = document.createElement("a");
    home.append("Home")
    home.href = "index.html";
    const menu = document.createElement("a");
    menu.href = "menu.html"
    menu.append("Menu")
    const toGo = document.createElement("a");
    toGo.href = "To Go.html";
    toGo.append("To GO")

    const nav = document.createElement("nav");
    nav.append(home, menu, toGo);
    document.querySelector("header").appendChild(nav);
}