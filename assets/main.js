// Password Generator

var nome = prompt('Inerire il Nome:');
var cognome = prompt('Inerire il Cognome:');
var colore = prompt('Inerire il tuo colore preferito:');
var final_number = 20;
var password = nome + cognome + colore + final_number;

document.getElementById("name").innerHTML = nome ;
document.getElementById('surname').innerHTML = cognome ;
document.getElementById('color').innerHTML = colore;
document.getElementById('pwd').innerHTML = password;
