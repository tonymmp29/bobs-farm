// src/server.js
const createApp = require('./app');

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📖 API docs: http://localhost:${PORT}/api-docs`);
});
