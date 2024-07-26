import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoteForm from './components/NoteForm';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id?" element={<NoteForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
