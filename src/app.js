// src/app.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the cloud-native-microservice service!');
});

export default app;
