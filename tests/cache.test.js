const cache = require("../cache/cache")
const logger = require("../logs/logs")

cache.connect();

describe("Cache", () => {
    it("should return a redis client", () => {
        expect(cache).toBeDefined();
    })

    it("should return a redis client with a password", () => {
        expect(cache.options.password).toBeDefined();
    })
})