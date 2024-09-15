import React from 'react';
const fs = window.require('fs');
const path = window.require('path');

const NoteList = ({ notes, setCurrentNote }) => {
  const notesDir = path.join(__dirname, '../notes');

  const loadNote = (file) => {
    const filePath = path.join(notesDir, file);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      setCurrentNote(data);
    });
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note} onClick={() => loadNote(note)}>
          {note}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
