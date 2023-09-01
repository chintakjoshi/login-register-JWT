const request = require('supertest')
const express = require('express')
const Users = require('./routes/Users')
const app = express()

app.use('/users', Users)

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });
});
