const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ hi: 'there' });
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
