// Require dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Require packages
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.SECRET,
    cookie: { maxAge: 1000 * 60 * 5},       // Set time for cookie to expire in milliseconds. 1000 * 60 * 5 = 5 minutes.
    rolling: true,
    resave: true,                           // Reset cookie maxAge on every new request
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(cookieParser());                   // Used to enable cookie maxAge
app.use(session(sess));

// Configure helpers for use by habdlebar templates
const hbs = exphbs.create({ helpers });

// COnfigure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`\nNow listening on port: ${PORT}\n`));
});