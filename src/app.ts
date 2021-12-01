import express from 'express';
import { HealthcheckRouter } from './healthcheck/router';

const app = express();

HealthcheckRouter.attach(app);

export default app;
