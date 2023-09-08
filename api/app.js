require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRoute = require('./routes/patientRoutes'); 
const doctorRoute = require('./routes/doctorRoutes'); 
const psychiatristRoute = require('./routes/psychiatristRoutes'); 
//const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

const PORT = process.env.PORT || 6000; 

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

app.use(cors()); 
app.use(express.json());

app.use('/api/patients', patientRoute); 
app.use('/api/doctors', doctorRoute); 
app.use('/api/psychiatrists', psychiatristRoute); 

app.get('/', (req, res) => {
    res.send('Welcome to the Rememoir Web App');
});

//app.use(errorMiddleware);

mongoose
    .connect(DB_CONNECTION_STRING)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Rememoir Web App is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });