import { Request, Response } from 'express';
import HealthcheckService from './service';

export default class HealthcheckController {
  get(req: Request, res: Response) {
    const service = new HealthcheckService();
    res.json(service.run());
  }
}
