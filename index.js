const express = require('express');
const app = express();
const PORT = 3000


// Test-Commands and General Information //
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/README.md")
})

app.get('/test', (req, res) => {
    res.send("Test-Page")
})


// API V1 //
app.get('/_api/v1/ConvertToBinary', (req, res) => {
    text = req.query.text;

    textArray = text.split('');
    ReturnText = "";
    textArray.forEach(function(Char){
        number = 0
        Binary = dec2bin(Char.charCodeAt(0))
        ReturnText = ReturnText + Binary + " "
        ReturnText.trim
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({text: ReturnText.trim()}))
})


/* HELP-FUNCTIONS */

// Convert Decimal to Binary //
function dec2bin(number){
    ReturnCode = (number >>> 0).toString(2);
    while(ReturnCode.length < 8){
        ReturnCode = "0" + ReturnCode
    }
    return ReturnCode
}



//Start Server
app.listen(PORT, () => {
    console.log('Server runs on Port: ' + PORT);
})