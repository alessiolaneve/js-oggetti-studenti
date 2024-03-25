// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
// prima ciclate con un ciclo for
// poi commentate il ciclo for e usate il forEach


const studenti = [
    { nome: 'Luca', cognome: 'Rossi', eta: '22' },
    { nome: 'Marco', cognome: 'Verdi', eta: '21' },
    { nome: 'Giulio', cognome: 'Bianchi', eta: '22' },
    { nome: 'Federico', cognome: 'Neri', eta: '24' },
    { nome: 'Giovanni', cognome: 'Storti', eta: '20' },
]

console.log(studenti)

// for (let i = 0; i < studenti.length; i++) {
//     const studente = studenti[i];
//     console.log(studente.nome + ' ' + studente.cognome)
// }

studenti.forEach(function(studente) {
    console.log(studente.nome + ' ' + studente.cognome)
});
