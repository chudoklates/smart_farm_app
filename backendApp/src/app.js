import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'

import { db/*, agenda, jobs*/ } from './config'

require('./fixtures')

db.on('error', error => {
  console.error(`Mongo connection error: ${error.message}`)
  process.exit(1)
})
db.once('open', async () => {
  console.log('Connected to the database')
})

// ;(async () => {
//   jobs.forEach(({ callback, jobName }) => {
//     agenda.define(jobName, callback)
//   })
//   // if (production) { 

//   // } else {
//   /**********************/
//   /* RUN TEST JOBS HERE */
//   /**********************/
//   await agenda.start()
//   console.log('Agenda started')
//   jobs.forEach(({ interval, jobName, options, type }) => {
//     if (type === 'single' && jobName.indexOf('TEST') === 0) agenda.every(interval, jobName, [], options)
//   })
//   // }
// })()

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req, res) => {
  res.writeHead(200, { Connection: 'close' })
  res.end('Up and running!')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

/**
* Normalize a port into a number, string, or false.
*/

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

