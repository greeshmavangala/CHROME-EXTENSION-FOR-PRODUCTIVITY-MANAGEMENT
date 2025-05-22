const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productivity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
const reportRoute = require('./routes/report');
const blocklistRoute = require('./routes/blocklist');

app.use('/api/report', reportRoute);
app.use('/api/blocklist', blocklistRoute);

// Optional default route
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
