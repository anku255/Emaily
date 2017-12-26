const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
