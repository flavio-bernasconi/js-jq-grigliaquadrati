  $(document).ready(function(){


  //array che popolo con 15 volte 'rosso' e 49 'verde'
  //i primi quindici saranno rosso
  //da 16 a 64 saranno verde
  //trovare modo di metterli in disordine
  var colori = [];
  for (var i = 0; i < 64; i++) {
    if (i < 15) {
      colori.push("rosso");
    }
    else {
      colori.push("verde");
    }
  }
  //funzione shuffle array
  function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  }
  // var numeroStrano = Math.random() - 0.5;
  // console.log(numeroStrano);

  shuffle(colori);
  console.log("dopo lo shuffle",colori);

  var contenuto = "";
  //creo loop 64 cicli ogni volta crea un div con una classe rosso o verde presa
  //dall array colori che ora é mischiato quindi l ordine sará casuale
  for (var i = 0; i < 64; i++) {

    contenuto = document.getElementById('contenitore').innerHTML;

    document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + colori[i] + "'"  +  ">" + "</div>";

  }

    var conteggio = 0;

    $("div.rosso").click(function(){
      $(this).css("background","red");
      conteggio = conteggio + 1;
      console.log("conteggio =",conteggio);
      document.getElementById("contatore").innerHTML = conteggio;

    });


    $("div.verde").click(function(){
      $(this).css("background","green");
    });









    //usa .one() jquery
    // $(this).addClass("cliccato");
    // if ($(this).hasClass("cliccato")==true) {
    //   contatore = contatore + 0;
    // }


  });
