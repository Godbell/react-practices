import http from 'http';
import path from 'path';
import express from 'express';

const port = 3000;
const application = express().use(
  express.static(path.join(import.meta.dirname, 'public')),
);

http
  .createServer(application)
  .on('listening', () => {
    console.log(`server starts...on ${port}`);
  })
  .listen(port);
