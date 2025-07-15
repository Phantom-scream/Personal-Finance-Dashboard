import app from './app';

const PORT = process.env.PORT || 5001; // Change to 5001 or another unused port

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});