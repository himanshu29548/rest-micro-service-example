const gateway = require('fast-gateway')

const verifyToken = (req, res, next) => {
    console.log("req------->", req.headers);
    if (req.headers?.authorization) {
        next();
    } else {
        res.setHeader('Content-type','application/json');
        res.statusCode = 401
        res.end(JSON.stringify({status:401, message:"Not authorization"}))
    }
}

const server = gateway({
    routes: [
        {
            prefix: '/user',
            target: 'http://localhost:5001',
            middlewares: [verifyToken],
        },
        {
            prefix: '/order',
            target: 'http://localhost:5002',
        },
        {
            prefix: '/payment',
            target: 'http://localhost:5003',
            middlewares: [verifyToken],
        },
    ]
})

server.get('/test', (req, res) => {
    res.send("api gatway successfully run.")
})
server.start(6001, () => {
    console.log("app list 6001 port")
})