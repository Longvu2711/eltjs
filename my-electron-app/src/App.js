import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteList from './NoteList';
const fs = window.require('fs');
const path = window.require('path');

const notesDir = path.join(__dirname, '../notes');

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    if (!fs.existsSync(notesDir)) {
      fs.mkdirSync(notesDir);
    }
    loadNotes();
  }, []);

  const loadNotes = () => {
    fs.readdir(notesDir, (err, files) => {
      if (err) throw err;
      setNotes(files);
    });
  };

  const saveNote = () => {
    if (currentNote.trim()) {
      const fileName = `note-${Date.now()}.txt`;
      const filePath = path.join(notesDir, fileName);
      fs.writeFile(filePath, currentNote, (err) => {
        if (err) throw err;
        loadNotes();
        setCurrentNote('');
      });
    }
  };

  return (
    <div>
      <h1>Note App</h1>
      <Note content={currentNote} setContent={setCurrentNote} saveNote={saveNote} />
      <NoteList notes={notes} setCurrentNote={setCurrentNote} />
    </div>
  );
};

export default App;
