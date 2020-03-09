import { RouterContext } from 'koa-router';
import { Response } from '../models/response';
import { Email } from '../models/email';
import { MailManager } from '../services/MailManager';
import { DEFAULT_FROM } from '../config/email';
import { EmailParser } from '../services/EmailParser';
import { CONFIRM_EMAIL_PATH } from '../config/params';

export default class BaseController {
    testConnection(context: RouterContext) {
        console.log('test connection');
        context.body = 'connection success !';
    }

    sendConfirmationEmail(context: RouterContext)
    {
        const { body } = context.request;

        const url = `${CONFIRM_EMAIL_PATH}/${body.keysecure}`;

        const email = new Email();
        email.content =  EmailParser.getEmailContentToString('email-confirm.pug', {firstname: body.firstname, lastname: body.lastname, url});
        email.to = `${body.firstname} <${body.email}>`;
        email.from = DEFAULT_FROM;
        email.subject = 'Confirmer votre adresse email'

        const mailManager: MailManager = MailManager.Instance;
        mailManager.send(email);

        // On attend pas que le mail soit envoyer pour retourner
        // la reponse de success
        context.type = 'application/json';
        context.body = JSON.stringify(new Response("success"));
    }
}
