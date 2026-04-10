const request = require('supertest');
const app = require('../server');

describe('Users API', () => {

  it('GET /users should return all users', async () => {
    const res = await request(app).get('/users');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
});

it('GET /users/:id should return one user', async () => {
  // 1. Crear usuario primero
  const newUser = {
    name: "Test User",
    email: `test${Date.now()}@test.com`
  };


  
  const createRes = await request(app)
    .post('/users')
    .send(newUser);

  console.log(createRes.body);
  const userId = createRes.body.data._id;

  // 2. Buscar ese usuario
  const res = await request(app).get(`/users/${userId}`);

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('_id', userId);
});