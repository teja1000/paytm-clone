const express = require("express");
const cors=require("cors");
const mainRouter=require("./routes/index");

app.use(cors());
app.use(express.json);


const app=express();
app.request("/api/v1",mainRouter);

app.listen(3000);


