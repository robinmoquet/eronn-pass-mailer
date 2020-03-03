import { RouterContext } from 'koa-router';

export default class BaseController {
    testConnection(context: RouterContext) {
        console.log('test connection');
        context.body = 'connection success !';
    }
}
