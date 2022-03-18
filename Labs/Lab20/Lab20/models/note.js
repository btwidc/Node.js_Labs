const fs = require("fs")
const path = require("path")

let notes = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'notes.json')));

function submit() {
    fs.writeFileSync(path.resolve(__dirname,'notes.json'), JSON.stringify(notes, null, '  '))
}

module.exports = {
    GetAll: () => {
        notes = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'notes.json')));
        return notes;
    },
    Add(note) {
        if (note.name.match(/^[a-zA-Z ,.'-]+$/) && note.number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
            notes.push(note);
            submit()
        }
    },
    Update(note) {
        if (note.name.match(/^[a-zA-Z ,.'-]+$/i) && note.number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/))
        {
        let to_upd = notes.find(n => n.name == note.name)
        if(to_upd) {
            to_upd.number = note.number
            submit()
        }
        else throw new Error('Person does not exist')
        }
    },
    Delete(fio) {
        let to_del = notes.find(n => n.name == fio)
        if(to_del) {
            notes = notes.filter(n => n != to_del)
            submit()
        }
        else throw new Error('Person does not exist')
    }
}