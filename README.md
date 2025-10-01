# Progetto: Applicazione Web Kanban Board con gestione Issue

## Descrizione del progetto
Sviluppare un'applicazione web che permette di creare, visualizzare e gestire issue tramite una Kanban board. La board è composta da quattro colonne: **Backlog**, **In Progress**, **Review** e **Done**.

L'app deve consentire di:
- Creare nuove issue tramite un form "Nuova issue"
- Spostare le issue tra le colonne (cambio di stato)
- Eliminare issue
- Salvare lo stato della board nel `localStorage` del browser, così da mantenere i dati anche dopo il refresh della pagina
- Ricaricare i dati dal `localStorage` all’avvio per ricostruire la board
- Aggiornare automaticamente la board e il `localStorage` dopo ogni operazione

Si richiede l’uso di una libreria grafica come **Tailwind CSS** o **Daisy UI** per il design e la UX.

---

## Analisi dei requisiti

### Requisiti funzionali
- **Creazione issue**: L’utente deve poter inserire nuove issue in qualsiasi momento tramite un form.
- **Visualizzazione issue**: Le issue devono essere visualizzate all’interno delle colonne della Kanban board.
- **Cambio stato**: L’utente deve poter spostare un’issue da una colonna all’altra (ad esempio, da Backlog a In Progress).
- **Eliminazione issue**: Deve essere possibile eliminare issue.
- **Persistenza dati**: Tutti i dati devono essere salvati nel `localStorage` per persistere tra le sessioni.
- **Caricamento dati**: Al caricamento della pagina, la board deve essere ricostruita automaticamente dal contenuto salvato in `localStorage`.
- **Aggiornamento automatico**: Ogni operazione (creazione, spostamento, eliminazione) deve aggiornare automaticamente la UI e il `localStorage`.

### Requisiti non funzionali
- **Interfaccia utente**: Utilizzare Tailwind CSS o Daisy UI per garantire un design moderno e responsivo.
- **Versionamento codice**: Utilizzare GitHub per il versionamento e la collaborazione.
- **Accessibilità**: Form e interazioni devono essere accessibili.
- **Performance**: La board deve essere reattiva e fluida durante le operazioni.

---

## Tecnologie suggerite
- **HTML5 / CSS3 / JavaScript (ES6+)**
- **Tailwind CSS / Daisy UI** per lo stile
- **LocalStorage API** per la persistenza dei dati
- **Git + GitHub** per il controllo versione
- (Opzionale) Framework frontend come React o Vue per una gestione più modulare

---

## Struttura dell’app

### Dati
Ogni issue può essere rappresentata da un oggetto con proprietà:
```js
{
  id: string,        // identificatore unico
  title: string,     // titolo issue
  description: string, // descrizione issue
  status: string,    // stato: 'backlog', 'in-progress', 'review', 'done'
  createdAt: Date    // data creazione (opzionale)
}
