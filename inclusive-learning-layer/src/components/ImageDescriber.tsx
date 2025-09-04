import { useState } from "react";
import "../App.css";

export default function ImageDescriber() {
  const [image, setImage] = useState<File | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  const handleDescribe = () => {
    if (!image) return alert("Upload an image first!");
    alert(`AI says: This looks like a sample description for ${image.name}`);
  };

  return (
    <div className="card">
      <h3>Image Describer</h3>
      <input type="file" accept="image/*" onChange={handleFile} />
      <button onClick={handleDescribe}>🖼️ Describe Image</button>
    </div>
  );
}
