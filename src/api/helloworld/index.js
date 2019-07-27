const Router = require('koa-router');

const helloworld = new Router();
const controller = require('./controller');

helloworld.get('/users', controller.userList);

module.exports = helloworld;