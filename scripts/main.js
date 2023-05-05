let searchBar = document.querySelector(".search_bar_section")
let searchIco = document.querySelector(".search_bar_img")

searchBar.addEventListener("mouseover", ()=>{
    searchIco.setAttribute("src", "./assets/lupa_azul.png")
})
searchBar.addEventListener("mouseout", ()=>{
    searchIco.setAttribute("src", "./assets/lupa.png")
})