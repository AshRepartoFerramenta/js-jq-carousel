//imposto il comando di reset
$(document).ready(
  function() {
            //Imposto una variabile che esegua l' immagine successiva
            var immagineSuccessivaDestra = $('.next');
            // Cliccando sulla freccia destra vado all'immagine successiva
            immagineSuccessivaDestra.click(
                function() {
              slideNext();
            }
        );
            //Imposto una variabile che esegua l'immagine precedente
            var immaginePrecedenteSinistra = $('.prev');
            // Cliccando sulla freccia destra vado all'immagine successiva
            immaginePrecedenteSinistra.click(
                function() {
              slidePrev();
            }
        );
    }
);
