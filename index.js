require('dotenv').config();
const express = require('express');
const app = express();
const intersectionRoutes = require('./routes/intersection');
const lightLogRoutes = require('./routes/LightLogs');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/intersections', intersectionRoutes);
app.use('/intersections', lightLogRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
