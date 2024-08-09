const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');  

const app = express();
const port = process.env.PORT||3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 

const dbConfig = {
  host: '217.21.85.103',
  user: 'u688548386_execprime',
  password: 'u688548386_execprime',
  database: 'u688548386_viskamnix'
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig); // Recreate the connection

  connection.connect(err => {
    if (err) {
      console.error('Error connecting to database:', err);
      setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
    } else {
      console.log('Connected to database');
    }
  });

  connection.on('error', err => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT' || err.code === 'EHOSTUNREACH' || err.code === 'EPIPE') {
      handleDisconnect(); // Reconnect on connection loss
    } else {
      throw err;
    }
  });
}

handleDisconnect();



app.get('/', (req, res) => {
  res.send('Hello world');
});


app.post('/submit-form', (req, res) => {
  const { name, email, phoneNumber, course, gender, facilities, query } = req.body;


  const sql = 'INSERT INTO registrations (name, email, phone_number, course, gender, facilities, query) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, email, phoneNumber, course, gender, facilities.join(','), query];

  connection.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error saving data');
      throw err;
    }
    res.send('Form data saved successfully');
  });
});

app.post('/Contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = 'INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, phone, message];

  connection.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error saving data');
      throw err;
    }
    res.send('Form data saved successfully');
  });
});

app.post('/cloudenquery', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  const query = 'INSERT INTO cloudEnquery(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});
app.post('/AI', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  
  const query = 'INSERT INTO AI(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});
app.post('/BlockChain', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;


  const query = 'INSERT INTO BlockChain(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/DataScince', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  const query = 'INSERT INTO DataScince(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/Testing', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO Testing(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/UIUX', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO UIUX(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/VR', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO VR(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/FULLSTACK', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO FULLSTACK(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/Ethical-Hacking', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO ETHICALHACKING(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
