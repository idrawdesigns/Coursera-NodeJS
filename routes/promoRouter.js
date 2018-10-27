const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the Promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});
promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.dishId + ' to you');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promos/:promoId');
})
.put((req, res, next) => {
    res.end('Will Edit details of the promotion: ' + req.params.dishId);
})
.delete((req, res, next) => {
    res.end('Deleting all promotion details');
});

module.exports = promoRouter;