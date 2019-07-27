const Router = require('koa-router');
const helloworld = require('./helloworld');

const api = new Router();

api.use('/helloworld', helloworld.routes());

module.exports = api;