import { useState } from "react";
import "../App.css"; // you can also make a separate Reader.css if preferred

export default function Reader() {
  const [text, setText] = useState("");

  const handleRead = () => {
    if (!text.trim()) return alert("Please enter text!");
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="card">
      <h3>Screen Reader</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text..."
      />
      <button onClick={handleRead}>🔊 Read Aloud</button>
    </div>
  );
}
