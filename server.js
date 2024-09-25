const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskroutes");
const userouter=require("./routes/useroutes")

const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.connect(
     MONGO_URL)
    .then(() => {
        console.log("Successfully Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error :",e);
    });

app.get("/", (req, res) => {
    res.send("<h1>Helloewf</h1>");
});

app.use(express.json())

app.use("/api/v1/user",userouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server Started at PORT : ${PORT}`);
});