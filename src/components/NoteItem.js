import React from 'react';
import { Link } from 'react-router-dom';
import { deleteNote } from '../utils/localStorage';

const NoteItem = ({ note }) => {
  const handleDelete = () => {
    deleteNote(note.id);
    window.location.reload(); // Refresh page to update the note list
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="text-gray-700">{note.content.substring(0, 100)}...</p>
      <p className="text-gray-500 text-sm">{new Date(note.timestamp).toLocaleString()}</p>
      <Link to={`/note/${note.id}`} className="text-blue-500 mr-4">Edit</Link>
      <button onClick={handleDelete} className="text-red-500">Delete</button>
    </div>
  );
};

export default NoteItem;
