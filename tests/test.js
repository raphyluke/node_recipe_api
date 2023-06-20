/* 
    Listing of all the tests to be run (Cypress, Mocha, Jest)
    1. Test if the database is running by entering data into the database
    2. Test if routes are working
    3. Test if the cache is working by entering data into the cache
    4. Test if the logs are working by entering data into the logs
*/

// Test if the database is running by entering data into the database
describe("is the database running", () => {
    test("Entering a recipe in the database", () => {
        const recipeModel = require('../models/recipeModel');
        const recipe = new recipeModel({
            name : 'test',
            type : 'test',
        });
        recipe.save().then((recipe) => {
            expect(recipe.name).toBe('test');
            recipe.deleteOne();
        })
    })
})


describe('is the routes working', () => {
    test('is the home route working', () => {
        const app = require('../api');
        const supertest = require('supertest');
        const request = supertest(app);
        request.get('/').end((err, response) => {
            expect(response.statusCode).toBe(200);
        })
    })
    test('is the recipe route working', () => {
        const app = require('../api');
        const supertest = require('supertest');
        const request = supertest(app);
        request.get('/api/recipes').end((err, response) => {
            expect(response.statusCode).toBe(200);
        })
    })
})

describe('is the cache working', () => {
    test('is the cache working', () => {
        const cache = require('../cache/cache');
        cache.connect();
        cache.set('test', 'test');
        cache.get('test', (err, data) => {
            expect(data).toBe('test');
        })
    })
})

describe('is the logs working', () => {
    test('is the logs working', () => {
        const logger = require('../logs/logs');
        logger.info('test');
        logger.read((err, data) => {
            expect(data).toBe('test');
        })
    })
})