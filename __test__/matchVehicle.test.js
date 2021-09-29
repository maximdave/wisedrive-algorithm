const models = require("../output/model.json");
const findCarByModel = require("../index");
const types = require("../output/types.json");

describe("Match Vehicle", () => {
  it("should return a matching Vehicle", async () => {
    // expect(1+1).toBe(2)
   const result =  findCarByModel("520D XDRIVE", "2017");
   const expected = [ '106275', '106459' ]
//    expect(result).arrayContaining(expected)
  });
});
