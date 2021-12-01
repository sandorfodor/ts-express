import HealthcheckService from './service';

describe('HealthcheckService', () => {
  it('return a static object', () => {
    const service = new HealthcheckService();
    expect(service.run()).toEqual({ success: true });
  });
});
