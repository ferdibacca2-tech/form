const form=document.getElementById("formPersona");
const btnAggiungi=document.getElementById("btn-aggiungi");
const btnRimuovi=document.getElementById("btn-rimuovi");
const tableBody=document.querySelector("#tabellaPersone tbody");

let people=JSON.parse(localStorage.getItem("people")) || [];
aggiornaTabella();

//Aggiungi persona
btnAggiungi.addEventListener("click", () =>{
    const nome = document.getElementById("nome").value.trim();
    const cognome = document.getElementById("cognome").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value.trim();

    if (!nome || !cognome || !email || !dob){
        alert("Compila tutti i campi");
        return;
    }

    //creo un oggetto JS cioè una "scheda" con 4 coppie chiave-valore
    const person={nome, cognome, email, dob};
    people.push(person);

    //salvaInLocalStorage();
    aggiornaTabella();
    form.reset();
});


function aggiornaTabella(){
    tableBody.innerHTML="";
    people.forEach((person, index) => {
        const row=document.createElement("tr");
        row.innerHTML = `
            <td>${person.nome}</td>
            <td>${person.cognome}</td>
            <td>${person.email}</td>
            <td>${person.dob}</td>
            <td><button onclick="rimuoviSingolaPersona(${index})">Rimuovi</button></td>
        `;
        tableBody.appendChild(row);
});
}

function rimuoviTutto(){
    
}