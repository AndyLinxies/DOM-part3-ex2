//Ajout de Contenu
//Ex1
let ex1 = document.querySelector('h1');
ex1.innerText= "Les attributs class et id"
console.log(ex1);

//Ex2
let ex2 = document.querySelector('h2');
ex2.innerText= "Exercice 2 partie A"

//Ex3
let ex3 = document.querySelectorAll('h2')[1];
ex3.innerText= "Exercice 2 partie B"
console.log(ex3);

//Ex4
let ex4 = document.querySelector('p');
ex4.innerHTML= "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur<b>"

console.log(ex4);

//Ex5
ex5 = document.querySelectorAll('p')[1]
ex5.innerText = "La manipulation de l'attribut Style peut-être une solution rapide"
console.log(ex5);

//Ajout d'Attributs
//Ex6
let ex6 = document.querySelector('h1')
ex6.id = "bigTitle"
console.log(ex6);

//Ex7
let ex7 = document.querySelector('div')
ex7.className="container"
console.log(ex7);

//Ex8
let ex8 = document.querySelectorAll('h2')

ex8.forEach(element => {
    element.setAttribute("class","title")
});
console.log(ex8);

//Ex9
let ex9 = document.querySelectorAll('p')
ex9.forEach(element => {
    element.setAttribute("class","text")
})
console.log(ex9);

//Ajout d'attributs et de leurs valeur
//Ex10 Ajout de plusieurs classes !
let ex10 = document.querySelector("section")
ex10.className="margin-bottom "+"border-black "+ "padding"

console.log(ex10);

//Ex11
let ex11 = document.querySelectorAll("section")[1];
ex11.className = "margin-top "+"border-black "+ "padding"

//Ex12 //Rajout attributs html pour faire le taff du css
let ex12=ex11.lastElementChild
ex12.setAttribute("style","background-color:blue; height:20px; border:solid 5px;" )
console.log(ex12);


