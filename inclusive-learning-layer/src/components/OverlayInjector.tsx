import { useState } from "react";
import "../App.css";

export default function OverlayInjector() {
  const [active, setActive] = useState(false);

  return (
    <div className="card">
      <h3>Overlay Injector</h3>
      <button onClick={() => setActive(!active)}>
        {active ? "❌ Remove Overlay" : "✨ Inject Overlay"}
      </button>

      {active && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
}
