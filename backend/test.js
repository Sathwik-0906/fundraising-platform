const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Test route is working ✅');
});

app.listen(5000, () => {
  console.log('🟢 Server is running at http://localhost:5000');
});
