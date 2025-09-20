// src/server.js
import app from './app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `cloud-native-microservice service is running on port http://localhost:${PORT}`
  );
});
