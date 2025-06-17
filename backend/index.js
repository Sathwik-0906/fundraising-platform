// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// require('dotenv').config();


// console.log("➡️ Starting server setup...");
// const authRoutes = require('./routes/auth');
// console.log("✅ Loaded auth routes");
// const fundraiserRoutes = require('./routes/fundraisers');



// // Middleware
// app.use(express.json());

// // Mount routes BEFORE listen()
// app.use('/api/auth', authRoutes);
// app.use('/api/fundraisers', fundraiserRoutes);

// // Root check route
// app.get('/', (req, res) => res.send('API Running'));

// // MongoDB connect
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Error:", err));

// // Start server LAST
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// CRITICAL: Middleware MUST come before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const fundraiserRoutes = require('./routes/fundraisers');
const authRoutes = require('./routes/auth');

// Test route to verify server works
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Mount routes
app.use('/api/fundraisers', fundraiserRoutes);
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('authRoutes loaded');
  console.log('Available routes:');
  console.log('- GET /test');
  console.log('- GET /api/auth/ping');
  console.log('- POST /api/auth/register');
  console.log('- POST /api/auth/login');
});
