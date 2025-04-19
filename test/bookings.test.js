const request = require('supertest');
const app = require('../app');

describe('GET /bookings', () => {

  it('should return 200 and correct message', async () => {
    const response = await request(app).get('/bookings');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Bookings route working fine!');
  });

  it('should return Content-Type as application/json', async () => {
    const response = await request(app).get('/bookings');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('should not return an empty body', async () => {
    const response = await request(app).get('/bookings');
    expect(response.body).not.toEqual({});
  });

});