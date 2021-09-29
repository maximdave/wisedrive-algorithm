const models = require("../output/model.json");
const findCarByModel = require("../index");
const types = require("../output/types.json");

describe("Match Vehicle", () => {
  it("should return a matching Vehicle", async () => {
    // expect(1+1).toBe(2)
    findCarByModel("520D XDRIVE", "2017");
  });
});
