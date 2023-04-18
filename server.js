const dotenv = require("dotenv");
const express = require("express");
const { connectDB } = require("./db/connect");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/routes");
const colors = require("colors");

// invoking the env configuration 
dotenv.config();

// morgan middleware (http-request logger)
app.use(morgan("combined"));

// to parse JSON data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// to prevent blocking the http requests
app.use(cors());

// to parse incoming requests that contains JSON payloads
app.use(express.json());

// routes middleware
app.use(routes);

const PORT = process.env.PORT || 5000;

// db connection
const start = async () => {
    try {
        await connectDB(process.env.CONNECT_URI);
        console.log("successfully connected to db".cyan.underline);
        app.listen(process.env.PORT, () => {
            // then we launch our server
            console.log(`server is running on port ${PORT}`.yellow.underline);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
