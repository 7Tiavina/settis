import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', apiLimiter);

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// Validation rules
const contactValidationRules = [
  body('name').not().isEmpty().trim().escape().withMessage('Name is required.'),
  body('email').isEmail().normalizeEmail().withMessage('A valid email is required.'),
  body('subject').not().isEmpty().trim().escape().withMessage('Subject is required.'),
  body('message').not().isEmpty().trim().escape().withMessage('Message is required.'),
  body('honeypot').isEmpty().withMessage('Bots are not allowed.')
];

const newsletterValidationRules = [
  body('email').isEmail().normalizeEmail().withMessage('A valid email is required.'),
  body('honeypot').isEmpty().withMessage('Bots are not allowed.')
];

// API endpoint for contact form submission
app.post('/api/contact', contactValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error saving message.');
    }
    res.status(200).send('Message saved successfully!');
  });
});

// API endpoint for newsletter subscription
app.post('/api/newsletter', newsletterValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  const query = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
  db.query(query, [email], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).send('This email is already subscribed.');
      }
      console.error('Error inserting data:', err);
      return res.status(500).send('Error subscribing to newsletter.');
    }
    res.status(200).send('Subscribed to newsletter successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
