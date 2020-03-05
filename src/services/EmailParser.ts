import { TEMPLATES_DIR } from '../config/pug';
import pug from 'pug';

export class EmailParser {
    
    static getEmailContentToString(template: string, options: object): string
    {
        return pug.renderFile(`${TEMPLATES_DIR}${template}`, options);
    }

}