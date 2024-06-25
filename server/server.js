const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb://localhost:27017/video-streaming', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const userRoutes = require('./routes/users');
const contentRoutes = require('./routes/contents');
const actorRoutes = require('./routes/actors');

app.use('/api/users', userRoutes);
app.use('/api/contents', contentRoutes);
app.use('/api/actors', actorRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
