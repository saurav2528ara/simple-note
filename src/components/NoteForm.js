import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotes, addNote, updateNote } from '../utils/localStorage';

const NoteForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    if (id) {
      const notes = getNotes();
      const note = notes.find(note => note.id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
        setTimestamp(note.timestamp);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { id: id || Date.now().toString(), title, content, timestamp: new Date().toISOString() };
    if (id) {
      updateNote(note);
    } else {
      addNote(note);
    }
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Note' : 'Add Note'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {id ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
