const findCarByModel = require("../index");

describe("Match Vehicle", () => {
  const expected = ["106275", "106459"];
  it("should return a matching Vehicle", () => {
    expect(findCarByModel("520D XDRIVE", "2017")).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

describe("No Vehicle found", () => {
  const expected = 'Car type not found';
  it("should not return a matching Vehicle", () => {
    expect(findCarByModel("520D", "9017")).toEqual(expected);
  });
});
