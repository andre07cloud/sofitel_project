const express = require('express');

function SocketRouter(socketIO){

    const router = express.Router();
    
    router.get('/forcast', (req, res) => {
        res.send("forcast!!!");
    })
    return router;
}

module.exports = SocketRouter;