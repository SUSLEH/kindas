const express = require("express");

const server = express();

server.all("/", (req, res) => {
    res.send("<h3><i>The bot is now online!</i></h3>");
});

const keepAlive = () => {
    server.listen(6969,() => console.log( "The server is ready aswell." ));
}