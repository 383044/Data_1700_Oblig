// En funksjon som tar imot bestillinger og skriver dem ut.
function bestill() {
    //tabellen som skal inneholde utskriften av bestillingene
     let billetter_liste = document.getElementById("billetter");

    // henting av input values
     const innFilm = document.getElementById("film").value;
     const innAntall = document.getElementById("antall").value;
     const innFornavn = document.getElementById("fornavn").value;
     const innEtternavn = document.getElementById("etternavn").value;
     const innTelefonnr = document.getElementById("telefonnr").value;
     const innEpost = document.getElementById("epost").value;


    //Regex for telefonnummer (8 siffer)
    const telefonRegex = /^[1-9]\d{7}$/;
    //Regex for e-postadresse
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validering av alle felt
    if (innFilm.trim() === "") {
        alert("Vennligst velg en film.");
        return;
    }

    if (innAntall.trim() === "" || !innAntall.match(/^[1-9]\d*$/)) {
        alert("Vennligst skriv inn et gyldig antall billetter.");
        return;
    }

    if (innFornavn.trim() === "" || !innFornavn.match(/^[A-Za-z]+$/)) {
        alert("Vennligst skriv inn et gyldig fornavn.");
        return;
    }

    if (innEtternavn.trim() === "" || !innEtternavn.match(/^[A-Za-z]+$/)) {
        alert("Vennligst skriv inn et gyldig etternavn.");
        return;
    }

    if (innTelefonnr.trim() === "" || !innTelefonnr.match(telefonRegex)) {
        alert("Vennligst skriv inn et gyldig telefonnummer.");
        return;
    }

    if (innEpost.trim() === "" || !innEpost.match(epostRegex)) {
        alert("Vennligst skriv inn en gyldig e-postadresse.");
        return;
    }


    //Definering av et objekt for input-dataene.
     let enBestilling = {
         film: innFilm,
         antall: innAntall,
         fornavn: innFornavn,
         etternavn: innEtternavn,
         telefonnr: innTelefonnr,
         epost: innEpost
     };
    // Opprettelse av et array og innlemming av objektet i det ved hjelp av push-metoden.
     const bestillingArray = [];
     bestillingArray.push(enBestilling);

     //For-løkke som går gjennom hele arrayet og legger inneholdet til tabelen.
     for (let i of bestillingArray) {
         let ut = "<tr><td class='output'>" + i.film + "</td><td class='output'>"+ i.antall +"</td><td class='output'>"+ i.fornavn + "</td><td class='output'>" + i.etternavn +
             "</td><td class='output'>" + i.telefonnr + "</td><td>" + i.epost + "</td></tr>";
         billetter_liste.insertAdjacentHTML("beforeend", ut);

         // en del av løkke, å blanke input-feltene.
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
     }

     //Hvis funksjonen blir kalt, returnerer den det oppdaterte arrayet. Det ble ikke brukt i koden, men det er kjekt å ha.
    return bestillingArray;
 }

 // En annen funksjon som sletter alle output "utskriften".
function slett(){
    const output_tabell = document.getElementById("billetter");
    const rader = output_tabell.getElementsByTagName("tr")
     const antall_rader = rader.length;
    for (let i= 1; i<antall_rader; i++){    //alltid rad med index nr1 blir slettet, for at tabellen oppdateres etter hver
        output_tabell.deleteRow(1)              //rad-sletting og jeg vil alltig slette rad nr1, som ligger under table-head
    }
 }
