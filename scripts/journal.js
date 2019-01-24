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
            <p>Mood: ${journalEntry.mood}</p>
        </section>`
}

entryLog = document.getElementById("entryLog")

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        entryComponent = makeJournalEntryComponent(entry)
        entryLog.innerHTML += entryComponent
    })
}

let journalDate = document.getElementById("journalDate")
let conceptsCovered = document.getElementById("conceptsCovered")
let journalEntry = document.getElementById("journalEntry")
let mood = document.getElementById("mood")
let entryButton = document.getElementById("entryButton")

entryButton.addEventListener("click", function () {
    addEntry()
})

const addEntry = () => {
    let entry = {}
    let journalDateValue = journalDate.value.replace(/-/g, "/")
    let conceptsCoveredValue = conceptsCovered.value
    let journalEntryValue = journalEntry.value
    let moodValue = mood.value

    journalDate.value = ""
    conceptsCovered.value = ""
    journalEntry.value = ""
    mood.selectedIndex = 0

    entry.date = journalDateValue
    entry.concept = conceptsCoveredValue
    entry.entry = journalEntryValue
    entry.mood = moodValue

    saveJournalEntry(entry)
    entryLog.innerHTML += makeJournalEntryComponent(entry)
}

const saveJournalEntry = (journalEntry) => {
    fetch("http://localhost:3000/entries", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(journalEntry)
   })
}