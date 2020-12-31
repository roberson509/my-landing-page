var express = require('express');

var app = express();
app.use(express.static('public'));

app.get("/",(req, res)=>{
res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});