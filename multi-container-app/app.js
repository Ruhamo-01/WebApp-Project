const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB_NAME || 'testdb'
};

let db;

function connectDB(retries = 5) {
  db = mysql.createConnection(dbConfig);

  db.connect(err => {
    if (err) {
      console.log(`Database connection failed. Retrying... ${retries}`, err.code || err.message);
      if (retries > 0) {
        setTimeout(() => connectDB(retries - 1), 5000); // retry after 5s
      } else {
        console.error('Could not connect to database:', err);
      }
      return;
    }
    console.log('Connected to database.');
  });
}

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MySQL Docker Compose app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

