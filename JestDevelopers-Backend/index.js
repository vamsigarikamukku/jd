const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const { BusinessData } = require("./Models/BusinessForm");

const app = express();
const port = process.env.PORT || 4444;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Db Connected...."))
    .catch((e) => console.log(e));

app.use(cors());
app.use(express.json());
app.use('/auth', require('./Routes/authRoutes'));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server running at ${port}`));
