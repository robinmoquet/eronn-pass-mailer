import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { routes } from './routes';

export default class Server {
    public readonly port: number;

    constructor(port: number) {
        this.port = port;
    }

    /**
     * Lance l'application sur le port spécifier dans la class
     *
     * @returns void
     */
    start(): void {
        this.runDefaultEnvConfig();

        const app = new Koa();
        const router = this.createRouter();

        app.use(bodyParser());
        app.use(router.routes());
        app.use(router.allowedMethods());

        app.listen(this.port);
    }

    /**
     * Initialise la logique de routing
     *
     * @returns Router
     */
    createRouter(): Router {
        const router = new Router();
        routes.forEach((route) =>
            router[route.method](route.path, route.action)
        );

        return router;
    }

    /**
     * Permet de définir les paramètres d'environnement
     * par défault de l'application
     *
     * @returns void
     */
    runDefaultEnvConfig(): void {
        process.env.TZ = 'Europe/Amsterdam';
    }
}
