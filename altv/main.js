  $(document).ready(function(){


  //array che popolo con 15 volte 'rosso' e 49 'verde'
  //i primi quindici saranno rosso
  //da 16 a 64 saranno verde
  //devo trovare il modo di non metterli in ordine
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


  //creo loop 64 cicli ogni volta crea un div con una classe rosso o verde presa
  //dall array colori che ora é mischiato quindi l ordine sará casuale
  for (var i = 0; i < 64; i++) {
    contenuto = document.getElementById('contenitore').innerHTML;

    document.getElementById('contenitore').innerHTML  = contenuto + "<div " + "class='" + colori[i] + "'"  +  ">" + "</div>";

    //controllo quante volte esce il valore 'rosso' per controllo
    // if (colori[i] == "rosso") {
    //   var conteggio = conteggio++;
    //   console.log(conteggio);
    // }
  }



    //
    // $("div.rosso").click(function(){
    //   $(this).css("background","red");
    // });
    //
    //
    // $("div.verde").click(function(){
    //   $(this).css("background","green");
    // });





  });
