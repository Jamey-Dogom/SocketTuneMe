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

    
    var clientIp = socket.request.connection._peername;

    console.log(clientIp);

    socket.emit('logIn', {
        msg: "We Got The IP",
        ip: clientIp
    });
})