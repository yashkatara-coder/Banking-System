const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

// ROUTES require

const authRoutes = require('./routes/auth.route');
const accountRouter = require('./routes/account.routes');


// ROUTES use
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountRouter);


module.exports = app;