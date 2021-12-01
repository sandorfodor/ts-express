import logger from './lib/logger';
import config from './lib/config';
import app from './app';

app.listen(config.get('app.port'), () => {
  logger.info(`App started on port: ${config.get('app.port')}`);
});
