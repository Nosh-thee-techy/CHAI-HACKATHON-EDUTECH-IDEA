import express from "express";

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working! 🚀" });
});

// Fake AI route
app.post("/summarize", (req, res) => {
  const { text } = req.body;
  // Instead of real AI, just return a dummy summary
  res.json({
    summary: `This is a summary of: ${text.substring(0, 30)}...`
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend stub running on http://localhost:${PORT}`);
});
