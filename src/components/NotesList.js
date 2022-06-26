import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes,handleAddNote,deleteNote}) => {
  return (
    <div className='notes-list'>
        {
            notes.map(note => (
                <Note key={note.id} id={note.id} deleteNote={deleteNote} text={note.text} date={note.date}/>
            ))
        }
        <AddNote handleAddNote={handleAddNote}  />
    </div>
  )
}

export default NotesList