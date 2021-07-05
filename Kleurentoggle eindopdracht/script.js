//UL(verzameling LI's) als class en Label(hamburger) als class
const dropDownMenu = document.querySelector(".ul-menu")
const hamburger = document.querySelector(".hamburgerknop")

//De losse LI classes
const homeitem = document.querySelector(".homeWit")
const groenitem = document.querySelector(".groen")
const paarsitem = document.querySelector(".paars")
const rooditem = document.querySelector(".rood")
const cyaanitem = document.querySelector(".cyaan")


//Menu (Mouseover ipv click)
hamburger.addEventListener('mouseover', () => {
dropDownMenu.classList.toggle("ul-menu");
})

//Menu openen en wit maken
homeitem.addEventListener('click', () => {
dropDownMenu.classList.toggle('ul-menu')
document.body.style.backgroundColor = "white";
})

//Menu openen en groen maken
groenitem.addEventListener('click', () => {
dropDownMenu.classList.toggle('ul-menu')
document.body.style.backgroundColor = "green";
})

//Menu openen en paars maken
paarsitem.addEventListener('click', () => {
dropDownMenu.classList.toggle('ul-menu')
document.body.style.backgroundColor = "purple";
})

//Menu openen en rood maken
rooditem.addEventListener('click', () => {
dropDownMenu.classList.toggle('ul-menu')
document.body.style.backgroundColor = "red";
})

//Menu openen en cyaan maken
cyaanitem.addEventListener('click', () => {
dropDownMenu.classList.toggle('ul-menu')
document.body.style.backgroundColor = "cyan";
})

