import React from "react";
import emojipedia from "../emojipedia";
import Cards from "./Cards";

function Entry(emoji) {
  return (
    <Cards
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Entry)}</dl>
    </div>
  );
}

export default App;
