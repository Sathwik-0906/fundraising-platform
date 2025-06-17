const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/auth');
const fundraiserRoutes = require('./routes/fundraisers');

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'API Running' });
});

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/fundraisers', fundraiserRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('✅ Auth routes loaded and working!');
  console.log('📍 Available routes:');
  console.log('   - GET / (Root)');
  console.log('   - GET /test (Server test)');
  console.log('   - GET /api/auth/ping (Auth test)');
  console.log('   - POST /api/auth/register (User registration)');
  console.log('   - POST /api/auth/login (User login)');
  console.log('   - GET /api/fundraisers (List fundraisers)');
  console.log('   - POST /api/fundraisers (Create fundraiser)');
});