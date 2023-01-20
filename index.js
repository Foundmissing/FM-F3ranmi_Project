const express = require("express")
const app = express();
const PORT = 2640;
app.get("/", (req, res) =>{
    res.end("Hello world ")
})
app.listen(PORT, () => {
    console.log("WE ARE RUSHING")
})
