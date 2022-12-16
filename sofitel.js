const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require('./db');
const path = require('path');
const app = express();
require('dotenv').config();
const http = require('http');

//Initialising Socket IO
const server = http.createServer(app);
const { Server } = require("socket.io");
let socketIO = new Server(server, {
  cors : {
    origin : "*"
  }
});

//App Router initialisation
const userRouter = require('./src/routes/useroutes');
const settingRouter = require('./src/routes/settingRoutes');
const deviseRouter = require('./src/routes/deviseRoutes');
const totemRouter = require('./src/routes/totemRoutes');
const planRouter = require('./src/routes/planRoutes');
const themeRouter = require('./src/routes/themeRoutes');

//SOCKET ROUTER
const socketRouter = require('./src/routes/socketRoutes')(socketIO);
// const io = new Server(server);
let users = [];

//bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());

//allows multiple http request anywhere
app.use(cors());

//Public files
app.use(express.static(path.join(__dirname, "public")));

//APP routes
app.use('/api/users', userRouter);
app.use('/api/sockets', socketRouter);
app.use('/api/settings', settingRouter);
app.use('/api/devises', deviseRouter);
app.use('/api/totems', totemRouter);
app.use('/api/salles', planRouter)
app.use('/api/themes', themeRouter);




//ON SOCKET SERVER
socketIO.on('connection', (socket) => {
    console.log("a user connected");
    socket.on('connected', (msg) =>{
      
      console.log(msg)
      socketIO.to(socket.id).emit('call_back', "socket "+socket.id+ ": "+msg+"");
    });
    console.log("users Id: "+socket.id);
    users.push(socket.id);
    console.log("users Id array: "+users);
   // socket.on('call_back'); //Event goes her
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

//connection to databse and create default super admin
connection();

//App listener
server.listen(process.env.PORT, () => 
  console.log(`your server listening on port ${process.env.PORT}`)
);