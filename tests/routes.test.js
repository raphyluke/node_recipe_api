const supertest = require('supertest');
const request = supertest(require('../api')());
const jwt = require('jsonwebtoken');

var token = jwt.sign({ id: 1 }, process.env.JWT_PRIVATE_KEY, { expiresIn: 86400 });

it("GET /api/recipes 200", async () => {
    const response = await request.get('/api/recipes');
    expect(response.status).toBe(200);
})

it("POST /api/recipes 401", async () => {
    const response = await request.post('/api/recipes');
    expect(response.status).toBe(401);
})

it("GET /api/recipes/:id 401", async () => {
    const response = await request.get('/api/recipes/1');
    expect(response.status).toBe(401);
})

it("PUT /api/recipes/:id 401", async () => {
    const response = await request.put('/api/recipes/1');
    expect(response.status).toBe(401);
})

it("DELETE /api/recipes/:id 401", async () => {
    const response = await request.delete('/api/recipes/1');
    expect(response.status).toBe(401);
})

it("POST /api/recipes 201", async () => {
    const response = await request.post('/api/recipes')
        .auth(token, { type: 'bearer' })
        .send({
            name: "Test Recipe",
            type: "Test Type",
            image: "Test Image",
            prepatime : 10,
            cooktime : 10,
            resttime : 10,
        })
        expect(response.status).toBe(200);
});