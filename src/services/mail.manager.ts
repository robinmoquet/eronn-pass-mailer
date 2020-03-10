import { Email } from '../models/email';
import { createTransport } from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '../config/smtp';
import Mail from 'nodemailer/lib/mailer';

export class MailManager {
    private static _intance: MailManager;
    private transporter: Mail;

    private constructor() {
        this.transporter = createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // Use it to try your connection

        // this.transporter.verify(function(error, success) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log("Server is ready to take our messages");
        //     }
        //   });
    }

    public static get Instance(): MailManager {
        if (this._intance === undefined) {
            this._intance = new MailManager();
        }
        return this._intance;
    }

    async send(email: Email): Promise<void> {
        const message: Mail.Options = {
            from: email.from,
            to: email.to,
            subject: email.subject,
            html: email.content,
        };

        try {
            const info = await this.transporter.sendMail(message);
            console.log(info);
        } catch (err) {
            // do something with err ...
        }
    }
}
