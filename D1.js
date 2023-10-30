/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//string // è una stringa, una sequenza di caratteri che devono essere indicati fra apici
//Number // definisce un valore di tipo numerio. Essi possono essere interi o decimali
//Boolean // è un valore che puo assumere solo 2 possibilità, TRUE oppure FALSE. Un booleano è come un interruttore che può essere acceso o spento
//null // è l'assenza intenzionale di un oggetto, è come se non ci fosse nulla
//undefined // è una proprietà che indica che una variabile non è stata definita oppure non ha uno specifio valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Metha";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = numero1;//se facciamo un collegamento alla domanda 3 senno possiamo anche fare:
//let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let name = 'Metha';
name = 'Kinde';

const nuovonome = 'Metha';
//nuovonome = 'Filippo'; //questo generera un errore


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numero1 -= 4; 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); //Verifica che name1 sia diverso da name2, True -> sono diversi , False -> sono uguali
console.log(name1.toLocaleLowerCase() === name2.toLocaleLowerCase());//Verifica che l'uguaglianza diventi true se entrambe le stringhe vengono trasformate in lettere minuscole