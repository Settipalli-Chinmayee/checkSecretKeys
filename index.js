const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get('/health',((req,res)=>{
    console.log("Checking Health!")
    res.json ({message:process.env.USER_NAME})
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

