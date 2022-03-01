const path = require('path');
const handlebars = require('express-handlebars');

const initHandlebars = (app) => {
  app.set('views', path.resolve(__dirname, '../views'));
  app.engine('hbs', handlebars({ extname: 'hbs' }));
  app.set('view engine', 'hbs');
}

module.exports = initHandlebars;
