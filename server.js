require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
const db = require('./config/db-sync');

db();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', router);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});