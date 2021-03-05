require('dotenv').config({ path: '.env' });
const express = require('express');
const morgan = require('morgan');
const initApp = require('./common/init');
const config = require('./common/config/config');
// Routes
// const routes = require('./routes/index');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
   app.use(
      morgan((tokens, req, res) =>
         [
            `<${process.env.NODE_ENV}>`,
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'),
            '-',
            tokens['response-time'](req, res),
            'ms',
         ].join(' '),
      ),
   );
}

// Establish DB connection and mount routes
initApp();

// Port
const port = config.app.port || '3000';

// Listen
const server = app.listen(port, () =>
   console.log(`App Listen Successfully To Port ${port}`),
);

// Unhandled Promise Rejection Handler
process.on('unhandledRejection', ex => {
   console.error(`${ex.message}`, ex);
   app.use((_req, res) => {
      res.status(500).json({
         success: false,
         msg: '500 Internet Error',
         data: null,
      });
   });

   server.close(() => process.exit(1));
});