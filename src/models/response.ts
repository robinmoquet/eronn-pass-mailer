export class Response {
    status: 'success' | 'error';
    message?: string;

    constructor(status: 'success' | 'error', message?: string) {
        this.status = status;
        this.message = message;
    }
}
