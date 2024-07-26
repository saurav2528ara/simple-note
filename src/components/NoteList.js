import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
