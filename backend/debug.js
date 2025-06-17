console.log('🔧 Starting debug server...');

const express = require('express');
console.log('✅ Express loaded');

const app = express();
console.log('✅ Express app created');

// Basic middleware
app.use(express.json());
console.log('✅ JSON middleware added');

// Test route first
app.get('/test', (req, res) => {
  console.log('🎯 /test route hit!');
  res.json({ message: 'Test route working!' });
});
console.log('✅ Test route added');

// Try to load auth routes
try {
  const authRoutes = require('./routes/auth');
  console.log('✅ Auth routes loaded successfully');
  
  app.use('/api/auth', authRoutes);
  console.log('✅ Auth routes mounted');
} catch (error) {
  console.error('❌ Error loading auth routes:', error.message);
}

// Try to load fundraiser routes  
try {
  const fundraiserRoutes = require('./routes/fundraisers');
  console.log('✅ Fundraiser routes loaded successfully');
  
  app.use('/api/fundraisers', fundraiserRoutes);
  console.log('✅ Fundraiser routes mounted');
} catch (error) {
  console.error('❌ Error loading fundraiser routes:', error.message);
}

// Root route
app.get('/', (req, res) => {
  console.log('🎯 Root route hit!');
  res.json({ message: 'Debug server running!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Debug server running on port ${PORT}`);
  console.log('📍 Test these routes:');
  console.log('   - http://localhost:5000/');
  console.log('   - http://localhost:5000/test');
  console.log('   - http://localhost:5000/api/auth/ping');
});