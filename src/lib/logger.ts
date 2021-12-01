import bunyan from 'bunyan';
import { Request, Response } from 'express';
import config from './config';

const requestSerializer = (request: Request) => {
  return {
    method: request.method,
    url: request.url,
    headers: request.headers,
  };
};

const responseSerializer = (response: Response) => {
  return {
    status: response.statusCode,
  };
};

const logger = bunyan.createLogger({
  name: config.get('app.name'),
  level: 'info',
  serializers: {
    req: requestSerializer,
    res: responseSerializer,
  },
});

export default logger;
