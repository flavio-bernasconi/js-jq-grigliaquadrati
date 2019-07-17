$(document).ready(function(){

var colore = ["verde","rosso"];
var contenuto;
var rosso = [];

// for (var i = 0; i < 64; i++) {
//   var caso = Math.floor(Math.random()*100);
//   var random = "";
//   if(caso % 3 == 0){
//     random = 1;
//   }
//   else {
//     random = 0;
//   }
//
//   contenuto = document.getElementById('contenitore').innerHTML;
//
//
//     document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + colore[random] + "'"  +  ">" + "</div>";
//
//
//     if (colore[random] == "rosso") {
//       console.log("aggiungo la classe rosso");
//       rosso.push(i);
//     }
//     else{
//       console.log("verde");
//     }
//     if (rosso.length >= 15) {
//       colore[1] = "verde"
//     }
// }


for (var i = 0; i < 64; i++) {
  var caso = Math.floor(Math.random()*100);
  var random = "";
  if(caso % 3 == 0){
    random = 1;
  }
  else {
    random = 0;
  }

  contenuto = document.getElementById('contenitore').innerHTML;


    document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + colore[random] + "'"  +  ">" + "</div>";

}









console.log(rosso);





  //
  // $("div.rosso").click(function(){
  //   $(this).css("background","red");
  // });
  //
  //
  // $("div.verde").click(function(){
  //   $(this).css("background","green");
  // });













  // var contenuto;
  // //scrivo la lista ripeto
  // function generatore(x,y){
  //   for (var i = 0; i < x; i++) {
  //     //numero casuale fra 1 e 2
  //     var random = Math.floor(Math.random()*2);
  //
  //     contenuto = document.getElementById('contenitore').innerHTML;
  //
  //     //genero 64 div con una classe casuale fra rosse e verde contennuto nell array colore
  //     //richiamando poi il numero casuale come indice dell array
  //     // document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + colore[random] + "'"  +  ">" + "</div>";
  //     document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + y + "'"  +  ">" + "</div>";
  //
  //   }
  // }
  //
  // generatore(15,colore[1]);
  // generatore(49,colore[0]);


});
