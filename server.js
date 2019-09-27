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

    socket.on("roomName", (data) => {
        socket.join(data.room);
        console.log("Room Name: ", data.room);
    })

    // catch greeting to room
    socket.on("greetRoom", (data) => {
        console.log("Greeting: ",data)
        socket.to(data.room).emit("Greeting", data.msg);
    })

    // Save the playlist object in PL Variable
    socket.on("NewPlaylist", (data) => {
        PL = data;
        console.log(data);
    });

    // Giving socket ID to party component
    socket.on("SendID", () => {
        socket.emit("hereBro", { id: socket.id, playlist: PL });
    });

    // Recieve updated playlist from client
    socket.on("updatePlaylist", (data) => {
        console.log("Should be updated Playlist: ", data);
        this.PL = data;
        io.in(this.PL.room).emit("updated", this.PL);
    })

    // Sends Song to room to add to playlist 
    socket.on("nextSong", data => {
        console.log("Next Song: ", data);
        socket.to(data.room).emit("newSong", { song: data.song });
    })

    // Send sond ID to everyon to set ther current songID
    socket.on("playThis", data => {
        socket.to(data.room).emit("setSongId", {songId: data.songLink});
    })


    // Gets the ipV6
    // var clientIp = socket.request.connection._peername;

    // console.log("Client Port: ",clientIp.port);

    // socket.emit('logIn', {
    //     msg: "We Got The IP",
    //     ip: clientIp
    // });
})

