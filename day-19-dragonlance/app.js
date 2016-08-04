'use strict';

let express = require('express');
let app = express();

app.use(express.static('public'));

require('./api/apiregistration.js')(app);

app.listen(5003, function() {
  console.log('site running at http://localhost:5003/')
});
