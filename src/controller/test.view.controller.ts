import { RouterContext } from "koa-router";
import pug from 'pug';
import { TEMPLATES_DIR } from "../config/pug";
import { EmailParser } from "../services/EmailParser";

export class TestViewController {

    viewEmailConfirm(context: RouterContext) {
        context.type = 'text/html';
        context.body = EmailParser.getEmailContentToString('email-confirm.pug', {firstname: 'John', lastname: 'Doe'});
    }

}