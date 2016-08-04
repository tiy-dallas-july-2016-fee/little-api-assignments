'use strict';

let dragonlance = require('./dragonlance.js');

module.exports = function(app) {
  app.get('/api/dragonlance', dragonlance.get);
}
