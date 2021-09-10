'use strict';
const express = require('express'),
  app = express(),
  layouts = require('express-ejs-layouts'),
  router = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use('/', router);

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
