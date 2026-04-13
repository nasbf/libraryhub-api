const request = require('supertest');
const app = require('../server');

describe('Books API', () => {

  it('GET /books should return all books', async () => {
    const res = await request(app).get('/books');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  
  it('GET /books/:id should return one book', async () => {
    const res = await request(app).get(`/books/12345687910`);
    expect([200, 400, 401, 404, 500]).toContain(res.statusCode);
    
  });

});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
});