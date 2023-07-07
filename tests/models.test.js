const recipeModel = require('../models/recipeModel');
const userModel = require('../models/userModel');

// Test CRUD for each model
describe("Recipe Model", () => {
    // 1 test per CRUD function
    it("should return a recipe model", () => {
        new recipeModel({
            "name": "test",
            "type": "test",
            "image": "test",
            "marks": [1, 2, 3],
            "ingredients": ["test", "test", "test"],
            "steps": ["test", "test", "test"],
            "comments": ["test", "test", "test"],
            "pictures": ["test", "test", "test"],
            "prepatime": 1,
            "cooktime": 1,
            "resttime": 1
        }).save().then((recipe) => {
            expect(recipe.name).toBe("test");
        });
    })

    it("should modify the recipe name", () => {
        recipeModel.findOneAndUpdate({
            "name": "test"
        }, {
            "name": "test2"
        }).then(() => {
            recipeModel.findOne({
                "name": "test2"
            }).then((recipe) => {
                expect(recipe.name).toBe("test2");
            })
        })
    })

    /* test("should delete the recipe", () => {
        recipeModel.findOneAndDelete({
            "name": "test2"
        }).then(() => {
            recipeModel.findOne({
                "name": "test2"
            }).then((recipe) => {
                expect(recipe).toBeNull();
            })
        })
    }) */
})