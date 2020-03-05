import BaseController from './controller/base.controller';
import { TestViewController } from './controller/test.view.controller';

// instanciation des controller
const baseController = new BaseController();
const testViewController = new TestViewController();

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
    {
        path: '/confirmation-email',
        method: 'post',
        action: baseController.sendConfirmationEmail
    }
    ,
    {
        path: '/view/confirmation-email',
        method: 'get',
        action: testViewController.viewEmailConfirm
    }
];
