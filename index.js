// const http = require('http');
// const data = require('./data');
// function dataControl(req,resp){
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);

const express = require('express');
const app = express();
const home = require('./pages/home');
const about = require('./pages/about');
const help = require('./pages/help');
const path = require('path');
// const data = require('./data');
const dbConnection = require('./mongodb/mongodb');
const reqFilter = require('./middleware');
const route = express.Router();
const publicPath = path.join(__dirname,'public');
app.set('view engine','ejs');

//app.use(express.static(publicPath));



route.use(reqFilter);

// app.get('',(req, resp)=>{
//     resp.send(home);
// });


app.get('',(req, resp)=>{
    resp.sendFile(`${publicPath}/user.html`);
});


app.get('/profile',reqFilter,async (req, resp)=>{
    
    let data = await dbConnection();
    data = await data.find().toArray();

    const users = data;
    resp.render('profile',{users});
});

route.get('/about',(req, resp)=>{
    resp.send(about);
});
route.get('/help',(req, resp)=>{
    resp.send(help);
});
app.use('/',route);
app.get('/support',(req, resp)=>{
    resp.send(`Hello this is Support Page ${req.query.name} <a href='/help'>Help Page</a></br>`);
});

app.get('*',(req, resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});

app.listen('4500');