import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from '@config/express';

const port = parseInt(`${process.env.PORT}`) || 3000;
const host = process.env.HOST || '127.0.0.1';

const server: http.Server = http.createServer(app);

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
})