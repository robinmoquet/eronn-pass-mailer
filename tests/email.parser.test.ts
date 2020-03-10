import { EmailParser } from '../src/services/email.parser';
import { CONFIRM_EMAIL_PATH } from '../src/config/params';

describe('Email Parser', () => {
    test('email confirmation contain firstname', () => {
        const emailBody = EmailParser.getEmailContentToString('email-confirm.pug', {firstname: 'John'});
        expect(emailBody).toContain('John')
    })

    test('email confirmation contain lastname', () => {
        const emailBody = EmailParser.getEmailContentToString('email-confirm.pug', {lastname: 'Doe'});
        expect(emailBody).toContain('Doe')
    })

    test('email confirmation contain lastname', () => {
        const url = `${CONFIRM_EMAIL_PATH}/ssshhhhh`;

        const emailBody = EmailParser.getEmailContentToString('email-confirm.pug', {url});
        expect(emailBody).toContain(url)
    })
})