const puppeteer = require('puppeteer')
var express = require('express'); // requre the express framework
var app = express();



const config ={
    launchOptions: {
        headless:true
    }
}

const getin = {
    roomname : 'input[id="room"]',
    btn : 'button[class= "MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]'
}

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})


// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    console.log("get user");
    puppeteer.launch(config.launchOptions).then(async browser => {
        const page = await browser.newPage();
        await page.goto('http://d0607610d0b8.ngrok.io');
        await page.waitFor(getin.roomname);
        await page.$eval(getin.roomname, el => el.value = 'macha123');
        await page.click(getin.btn);  
    })
    res.end("{ok}");
})







