// src/app.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the acquisitions service!');
});

export default app;
