// //imposto il comando di reset jquery
// $(document).ready(
//   function() {
//             // Imposto la condizione che :"Cliccando sulla freccia destra vado all'immagine successiva"
//             $('.next').click(
//                 function() {
//                 immagineSuccessivaDestra();
//             }
//         );
//             // Imposto la condizione che :"Cliccando sulla freccia sinistra vado all'immagine precedente"
//             $('.prev').click(
//                 function() {
//                 immagineSuccessivaSinistra();
//             }
//         );
//     }
// );
//
// //Imposto le funzioni di movimento delle slides a destra e l'attivazione del cerchio 'attivo/spento'
// function immagineSuccessivaDestra(){
//     var immagineAttuale = $('.images img.active');
//     var cerchioSlide = $('.nav i.active');
//     //Rimuovo il tasto di attivazione del cerchio
//     immagineAttuale.removeClass('active');
//     cerchioSlide.removeClass('active');
//
// }



//Ho rifatto l'esercizio impostando un metodo lungo,riprovo a farlo con il metodo corto


//Imposto il Reset del jquery
$(document).ready(
  function() {
     //imposto la variabile con relativa funzione al tasto 'click' sulla freccia dx
    var immagineSuccessivaDestra = $('.next');
    immagineSuccessivaDestra.click(
        function() {
      slideSuccessiva();
    });
     //imposto la variabile con relativa funzione al tasto 'click' sulla freccia sx
    var immagineSuccessivaSinistra = $('.prev');
    immagineSuccessivaSinistra.click(
        function() {
      slidePrecedente();
    });

// Impostate le condizioni generali di funzione,assegno i comandi relativi all'attivazione
//e disattivazione delle slides e dei bottoni,aggiungendo e rimuovendo le classi.

    function slideSuccessiva() {
        var attivaImmagine = $('img.active');
        var immagineSuccessiva = attivaImmagine.next();
        var cerchioAttivato = $('.nav > i.active');
        var cerchioSuccessivo = cerchioAttivato.next();

        //Pongo le condizioni vero/falso di attivazione dei comandi di destra.
        // se attivo le slides attivo i bottoni,in caso contrario le disattivo.

        if (attivaImmagine.hasClass('last') == true && cerchioAttivato.hasClass('last') == true) {
            immagineSuccessiva = $('img.first');
            cerchioSuccessivo = $('i.first');
          }
          attivaImmagine.removeClass('active');
          immagineSuccessiva.addClass('active');
          cerchioAttivato.removeClass('active');
          cerchioSuccessivo.addClass('active');
        }

    //Pongo le condizioni vero/falso di attivazione dei comandi di sinistra.
    // se attivo le slides attivo i bottoni,in caso contrario le disattivo.

    function slidePrecedente() {
        var attivaImmagine = $('img.active');
        var immaginePrecedente = attivaImmagine.prev();
        var cerchioAttivato = $('.nav > i.active');
        var cerchioPrecedente = cerchioAttivato.prev();
            if (attivaImmagine.hasClass('first') == true && cerchioAttivato.hasClass('first') == true) {
                immaginePrecedente = $('img.last');
                immaginePrecedente = $('i.last');
            }

        attivaImmagine.removeClass('active');
        immaginePrecedente.addClass('active');
        cerchioAttivato.removeClass('active');
        immaginePrecedente.addClass('active');
        }


// BONUS //

// Aggiungo  la possibilità di andare avanti e indietro con la tastiera
//premendo le frecce destra/sinistra.

$(document).keydown(
      function() {
        if (event.which == 39) {
          slidePrecedente();
        } else if (event.which == 37) {
          slideSuccessiva();
        }
      }
    );
