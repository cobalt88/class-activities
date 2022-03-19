var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

listEl.appendChild(li1);
li1.append("Pizza");
listEl.appendChild(li2);
li2.append("Apples");
listEl.appendChild(li3);
li3.append("dumplings");
listEl.appendChild(li4);
li4.append("cupcakes");


body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
listEl.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;")
li1.setAttribute("style", "background-color: grey;")

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px; padding: 20px; background-color: #333333;");

// TODO: Add ordered list items containing four favorite foods


// function makeList () {
//   let listData = ["Pasta", "Pot Stickers", "Orange Chicken", "Apples"], 
//   lengthOfList = listData.length, li1, i;
//   document.getElementsByTagName('body') [0].appendChild(favoriteEl);
//   for (i = 0; i <lengthOfList; i++) {
//     li1 = listData[i];
//     listEl.appendChild(li1);
//   }
// }


// makeList();
