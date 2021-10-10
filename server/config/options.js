const path = require('path');

module.exports = {
  config : path.join(__dirname + '/config'),
  'migrations-path' : path.join(__dirname + '/server/migrations'),
  'seeders-path' : path.join(__dirname + '/server/seeders'),
  'models-path' : path.join(__dirname + '/server/models')
}