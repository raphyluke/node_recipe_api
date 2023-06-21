const recipeController = require('../controllers/recipeController');
const userController = require('../controllers/userController');

describe("Recipe Controller", () => {
    test("should return a recipe controller", () => {
        expect(recipeController).toBeDefined();
    })

    test("should return a recipe controller with a getRecipes function", () => {
        expect(recipeController.readRecipe).toBeDefined();
    })

    test("should return a recipe controller with a getRecipe function", () => {
        expect(recipeController.readOneRecipe).toBeDefined();
    })

    test("should return a recipe controller with a createRecipe function", () => {
        expect(recipeController.createRecipe).toBeDefined();
    })

    test("should return a recipe controller with a updateRecipe function", () => {
        expect(recipeController.updateRecipe).toBeDefined();
    })

    test("should return a recipe controller with a deleteRecipe function", () => {
        expect(recipeController.deleteRecipe).toBeDefined();
    })
})

describe("User Controller", () => {
    test("should return a user controller", () => {
        expect(userController).toBeDefined();
    })

    test("should return a user controller with a login function", () => {
        expect(userController.login).toBeDefined();
    })

    test("should return a user controller with a register function", () => {
        expect(userController.register).toBeDefined();
    })
})