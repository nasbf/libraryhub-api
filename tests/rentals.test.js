const request = require('supertest');
const app = require('../server');

describe('Rentals API', () => {

  let rentalId;

  // 🔹 Crear rental antes de probar
  beforeAll(async () => {
    const newRental = {
      userId: "69cd96ef7b4f33e76f7c0d76", // usa uno válido
      bookId: "69dd4ce6f643153e26a53b57", // usa uno válido
      returnDate: "2026-09-26"
    };

    const res = await request(app)
      .post('/rentals')
      .send(newRental);

    console.log(res.body);

    rentalId = res.body.data._id;
  });

  // 🔹 GET ALL
  it('GET /rentals should return all rentals', async () => {
    const res = await request(app).get('/rentals');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // 🔹 GET BY ID
  it('GET /rentals/:id should return one rental', async () => {
    const res = await request(app).get(`/rentals/${rentalId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', rentalId);
  });

});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
});