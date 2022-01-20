// IMPORTS DEFAULT
const express = require('express');
const app = express();
const startServer = require('./infraestructure/server');

app.set('view engine', 'ejs');
app.use(express.static('public'));


// ROUTES IMPORT
const loginRoute = require('./routes/loginRoute');
const homeRoute = require('./routes/dashboardRoute');
const dRotue = require('./routes/documentationRoute');
const createTicket = require('./routes/createTicketRoute');
const listTickets = require('./routes/listTicketsRoute');

// ROUTES
app.use(loginRoute);
app.use(homeRoute);
app.use(dRotue);
app.use(createTicket);
app.use(listTickets);

// // // SERVER START 
// app.use(startServer);


app.listen(4000, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log('SERVER IS RUNNING ON PORT 4000.');
    }
})
