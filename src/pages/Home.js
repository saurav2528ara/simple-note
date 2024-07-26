import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNotes } from '../utils/localStorage';
import NoteList from '../components/NoteList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const notesPerPage = 10;

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <Link to="/note" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add New Note
      </Link>
      <NoteList notes={currentNotes} />
      <Pagination
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
