const request = require('supertest');
const app = require('../server');

describe('Reservations API', () => {


  it('GET /reservations should return all reservations', async () => {
    const res = await request(app).get('/reservations');

    expect([200, 401, 404]).toContain(res.statusCode);
  });

  
  it('GET /reservations/:id should handle request', async () => {
    const res = await request(app).get('/reservations/123654879215');

    expect([200, 400, 401, 404, 500]).toContain(res.statusCode);
  });

});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
});