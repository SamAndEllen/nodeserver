require('dotenv').config();
const port = process.env.PORT || 3000;

const Koa = require('koa');
const Router = require('koa-router');
const api = require('api');

const app = new Koa();

const router = new Router();
router.use(api.routes());

app.use(router.routes());

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
