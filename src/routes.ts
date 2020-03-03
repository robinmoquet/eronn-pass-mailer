import BaseController from './controller/base.controller';

// instanciation des controller
const baseController = new BaseController();

interface Route {
    path: string;
    method: 'get' | 'post';
    action: any;
}

export const routes: Array<Route> = [
    {
        path: '/',
        method: 'get',
        action: baseController.testConnection,
    },
];
