const supertest = require('supertest');
const request = supertest(require('../api')());

it("GET /api/recipes", async () => {
    const response = await request.get('/api/recipes');
    expect(response.status).toBe(200);
})

it("POST /api/recipes", async () => {
    const response = await request.post('/api/recipes');
    expect(response.status).toBe(401);
})

it("GET /api/recipes/:id", async () => {
    const response = await request.get('/api/recipes/1');
    expect(response.status).toBe(401);
})

it("PUT /api/recipes/:id", async () => {
    const response = await request.put('/api/recipes/1');
    expect(response.status).toBe(401);
})

it("DELETE /api/recipes/:id", async () => {
    const response = await request.delete('/api/recipes/1');
    expect(response.status).toBe(401);
})