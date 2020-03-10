import { TEMPLATES_DIR } from '../config/pug';
import pug from 'pug';

export class EmailParser {
    /**
     * Retourne le content d'un email par rapport à une view pug
     *
     * @param  {string} template
     * @param  {object} options
     * @returns string
     */
    static getEmailContentToString(
        template: string,
        options: object = {}
    ): string {
        return pug.renderFile(`${TEMPLATES_DIR}${template}`, options);
    }
}
