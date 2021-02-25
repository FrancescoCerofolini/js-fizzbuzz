// PER QUANTO RIGUARDA LA CONSEGNA NON HO CAPITO SE DOVESSIMO FARE UN ESERCIZIO VELOCE COME QUELLO DI STAMANI E QUINDI 
// "SNACK", STAMPANDO SOLTANTO LA CONSEGNA DELL' ESERCIZIO NELLA CONSOLE O SE DOVESSIMO DARGLI TUTTA
//  UN IMPAGINAZIONE CARINA E UN LAYOUT PARTICOLARE. VISTO CHE NON SPECIFICATO HO PREFERITO SEMPLICEMENTE
//  ATTANERMI ALLA STAMPA IN FORMATO CONSOLE E QUINDO HO USATO UNA LOGICA PIÙ SEMPLIFICATA. ATTRIBUISCO QUINDI
//  UNA SOLA VARIABILE i AL MIO CICLO for PER \SEMPLIFICARLO ALL'OSSO. APPLICO QUINDI ALL'INTERNO UN if
//  A 4 CONDIZIONI. lA PIÙ RILEVANTE È LA CONDIZIONE CHE SIA MULTIPLO DI 15 E APPLICO QUINDI IL CALCOLO % 
// ( DIVISIONE CON RESTO) A CUI PONGO IL RESTO == 0 E CIOÈ IMPONGO LA CONDIZIONE DI DIVISIBILE PER X. ATTRIBUISCO
//  ALLA MIA X IL VALORE NEI CASI RICHIESTI NELLA CONSEGNA DELL'ESERCIZIO.   

for (var i=1; i < 101; i++) {
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};


// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
