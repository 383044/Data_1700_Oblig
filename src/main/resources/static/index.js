// En funksjon som tar imot bestillinger og legge dem inn i arraret.
function bestill() {
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
        tlf: innTelefonnr,
        epost: innEpost
    };
    // lagring av info i et array som er allerede etablert i server.
    $.post("/leggTil", enBestilling, function (data) {
        hentData();
    })

    // Blanking av input-feltene
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

// en funksjon som henter data fra server og legger dem ut i tabelen på klient side
function hentData(){
    $.get("/hent",function (data){
        //Første rad i utskrift tabellen
        $("#billetter").html("<tr><th> Film </th><th> Antall </th><th> Fornavn </th> <th> Etternavn </th><th> Telefon_nr </th><th> Epost </th></tr>");

        //For-løkke som går gjennom hele arrayet og legger inneholdet til tabelen i html-en
        for (let i of data) {
           let ut = "<tr><td class='output'>" + i.film + "</td><td class='output'>" + i.antall + "</td><td class='output'>" + i.fornavn + "</td><td class='output'>" + i.etternavn +
                "</td><td class='output'>" + i.tlf + "</td><td>" + i.epost + "</td></tr>";
            $("#billetter").append(ut);
        }
    })
 }

// En annen funksjon som sletter alle output "utskriften".
 function slett(){
    $.get("/slett",function (){
        hentData();
    })
 }
