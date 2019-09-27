const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({
    extended: true
}));


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'));

const server = app.listen(3333, () => console.log('music bumping on 3333'));
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    let PL = null;

    // Join the Socket Room
    socket.emit("log", { msg: "Here is the ID: ", id: socket.id })

    // catch greeting to room
    socket.on("greetRoom", (data) => {
        io.in(this.PL.room).emit("Greeting", data);
    })

    // Save the playlist object in PL Variable
    socket.on("NewPlaylist", (data) => {
        PL = data;
        console.log(data);
    });

    // Giving socket ID to party component
    socket.on("SendID", () => {
        socket.emit("hereBro", { id: socket.id, playlist:  PL });
    });
    let self = this
    // Recieve updated playlist from client
    socket.on("updatePlaylist", (data) => {
        
        console.log("Should be updated Playlist: ", data);
        self.PL = data;
        io.in(this.PL.room).emit("updated", this.PL);
    })
    



    // Gets the ipV6
    // var clientIp = socket.request.connection._peername;

    // console.log("Client Port: ",clientIp.port);

    // socket.emit('logIn', {
    //     msg: "We Got The IP",
    //     ip: clientIp
    // });
})

