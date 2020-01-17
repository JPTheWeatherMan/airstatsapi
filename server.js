const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const apiRouter = require('./routes/ApiRouter');
const newUserRoute = require('./routes/newUserRoute')

function connectToDB() {
  mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'AircraftCharacteristics'
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to DB');
  });
}

const loadMiddleware = () => {
  // Cross origin resource sharing middleware
  app.use(
    cors({
      origin: ['http://airstats.app'],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
  );

  // Security middleware
  app.use(helmet());

  // Morgan set to log all requests
  app.use(morgan('common'));

  // API router
  app.use('/api', apiRouter);

  app.use('/', newUserRoute)

  console.log('Middleware Loaded');
};

const startServer = () => {
  app.listen(port, () => console.log(`App listening on ${port}`));
};

const app = express();
const port = process.env.PORT;

startServer();
loadMiddleware();
connectToDB();
