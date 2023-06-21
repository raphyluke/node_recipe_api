const cache = require("../cache/cache")
const logger = require("../logs/logs")

cache.connect();

describe("Cache", () => {
    test("should return a redis client", () => {
        expect(cache).toBeDefined();
    })

    test("should return a redis client with a password", () => {
        expect(cache.options.password).toBeDefined();
    })
})