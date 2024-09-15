import React from 'react';

const Note = ({ content, setContent, saveNote }) => {
  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={saveNote}>Save Note</button>
    </div>
  );
};

export default Note;
