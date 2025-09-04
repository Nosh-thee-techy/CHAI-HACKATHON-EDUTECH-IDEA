import { useState } from "react";
import "../App.css";

export default function VoiceNav() {
  const [command, setCommand] = useState("");

  const handleListen = () => {
    const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setCommand(transcript);
      alert("Heard command: " + transcript);
    };
    recognition.start();
  };

  return (
    <div className="card">
      <h3>Voice Navigation</h3>
      <button onClick={handleListen}>🎙️ Start Listening</button>
      <p>Last command: {command}</p>
    </div>
  );
}
