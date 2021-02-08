import React, { useState } from "react";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "harsh",
      content: "harshvardhan review"
    },
    {
        title: "Smriti",
        content: "Smriti review"
      },
      {
        title: "Sanjol",
        content: "Sanjol review"
      },
      {
        title: "Nikunj",
        content: "Nikunj review"
      }
  ]);

  return (
    <div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;
