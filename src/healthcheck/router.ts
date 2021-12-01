import { Express } from 'express';
import HealthcheckController from './controller';

export class HealthcheckRouter {
  static attach(app: Express) {
    const controller = new HealthcheckController();
    app.get('/healthcheck', controller.get);
  }
}
