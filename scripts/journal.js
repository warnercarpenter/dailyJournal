fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(entries => {renderJournalEntries(entries)}
    )
    
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <section class="entry">
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.date}</p>
        </section>`
}

entryLog = document.getElementById("entryLog")

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        entryComponent = makeJournalEntryComponent(entry)
        entryLog.innerHTML += entryComponent
    })
}