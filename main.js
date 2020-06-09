//imposto il comando di reset jquery
$(document).ready(
  function() {
            // Imposto la condizione che :"Cliccando sulla freccia destra vado all'immagine successiva"
            $('.next').click(
                function() {
                immagineSuccessivaDestra();
            }
        );
            // Imposto la condizione che :"Cliccando sulla freccia sinistra vado all'immagine precedente"
            $('.prev').click(
                function() {
                immagineSuccessivaSinistra();
            }
        );
    }
);

//Imposto le funzioni di movimento delle slides a destra e il cerchio attivo/spento
function immagineSuccessivaDestra(){
    var immagineAttuale = $('.images img.active');
    var cerchioSlide = $('.nav i.active');

    immagineAttuale.removeClass('active');
    cerchioSlide.removeClass('active');

}
