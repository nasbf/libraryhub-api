const request = require('supertest');
const app = require('../server');

describe('Rentals API', () => {

  it('GET /rentals should return all rentals', async () => {
    const res = await request(app).get('/rentals');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});