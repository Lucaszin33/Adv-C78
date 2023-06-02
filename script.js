var images = [
//Filho 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZ2EUtn4reKGU_ZppNphWetIx9nFoWqKGVhKr6GEyrNRZUd4rIHcgrAdM3Sw2YxQtdQU&usqp=CAU",
//pai
"https://png.pngtree.com/png-clipart/20190417/ourmid/pngtree-hand-drawn-cute-father-and-son-png-image_937119.jpg",
//mae
"https://greenpng.com/wp-content/uploads/2023/04/Fotos-de-mae-e-filhos-juntos-em-desenho-1024x899.png"
]
var names = [
//Filho
"Lucas",
//pai
"Edson",
//mae
"Andrea"
]
var i = 0
function update()
{
   i++
   var numerofamiliaarray = 2
   if (i > numerofamiliaarray) {
    i = 0
   }
   var trocarimg = images[i];
   var trocarnome = names[i];
   document.getElementById("familiaImagem").src = trocarimg;
   document.getElementById("familiaNomes").innerHTML = trocarnome;
}