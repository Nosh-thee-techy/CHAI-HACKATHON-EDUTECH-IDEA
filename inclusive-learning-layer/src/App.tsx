import { useState } from "react";

import Reader from "./components/Reader";
import ImageDescriber from "./components/ImageDescriber";
import VoiceNav from "./components/VoiceNav";
import OverlayInjector from "./components/OverlayInjector";

import "./App.css";

function App() {
  const [active, setActive] = useState("Reader");

  const renderContent = () => {
    switch (active) {
      case "Reader":
        return <Reader />;
      case "Image Describer":
        return <ImageDescriber />;
      case "Voice Nav":
        return <VoiceNav />;
      case "Overlay Injector":
        return <OverlayInjector />;
      default:
        return <Reader />;
    }
  };

  const tools = ["Reader", "Image Describer", "Voice Nav", "Overlay Injector"];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>Inclusive Layer 🌍</h1>
        <nav>
          {tools.map((tool) => (
            <button
              key={tool}
              className={active === tool ? "active" : ""}
              onClick={() => setActive(tool)}
            >
              {tool}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        <header className="header">
          <h2>{active}</h2>
        </header>

        <section className="content">{renderContent()}</section>
      </main>
    </div>
  );
}

export default App;
