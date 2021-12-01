import convict from 'convict';

export default convict({
  app: {
    name: {
      format: String,
      default: 'ts-express',
    },
    port: {
      format: 'port',
      default: 8080,
      env: 'PORT',
    },
  },
});
