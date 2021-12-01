import request from 'supertest';
import app from '../app';

describe('/healthcheck', () => {
  describe('GET', () => {
    it('responds with 200', async () => {
      await request(app)
        .get('/healthcheck')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
