const supertest = require('supertest');
const request = supertest(require('../api')());

test("GET /api/recipes should return 200", async () => {
    const response = await request.get('/api/recipes');
    expect(response.status).toBe(200);
})