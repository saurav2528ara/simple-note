export const getNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  
  export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const addNote = (note) => {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
  };
  
  export const updateNote = (updatedNote) => {
    const notes = getNotes();
    const index = notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      notes[index] = updatedNote;
      saveNotes(notes);
    }
  };
  
  export const deleteNote = (id) => {
    const notes = getNotes();
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotes(updatedNotes);
  };
  