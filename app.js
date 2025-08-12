require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User'); // to register model

const app = express();
app.use(express.json());

// basic health route
app.get('/', (req, res) => res.json({ message: 'UDEVS backend (Sequelize) is running' }));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

// Test DB connection and sync models, then start server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database authenticated (Sequelize)');

    // Use sync({ alter: true }) ONLY in dev to update tables automatically.
    // For production use migrations instead.
    await sequelize.sync({ alter: true });
    console.log('✅ Models synced');

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Unable to start server:', err.message);
    process.exit(1);
  }
})();
