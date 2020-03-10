import { RouterContext } from 'koa-router';
import { EmailParser } from '../services/email.parser';
import { CONFIRM_EMAIL_PATH } from '../config/params';

export class TestViewController {
    viewEmailConfirm(context: RouterContext) {
        context.type = 'text/html';
        const url = `${CONFIRM_EMAIL_PATH}/ssshhhh`;
        context.body = EmailParser.getEmailContentToString(
            'email-confirm.pug',
            { firstname: 'John', lastname: 'Doe', url }
        );
    }
}
