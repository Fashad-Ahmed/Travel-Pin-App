const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/users.js');
const pinRoute = require('./routes/pins.js');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('dB connected!');
    })
    .catch(err => console.log(err)
    );

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8000, () => {
    console.log('Server running!');
})