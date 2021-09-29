const models = require("./output/model.json");
const types = require("./output/types.json");

const findCarByModel = (carModel, carYear) => {
  console.log(process.argv);
  const [model, year] =
    carModel && carYear
      ? [carModel, carYear]
      : [process.argv[2], process.argv[3]];

  const matchingCar = models.find(
    (car) =>
      car.model === model &&
      +new Date(car.regDate).getFullYear() === +new Date(year).getFullYear()
  );
  
  if (!matchingCar) {
    console.error("Car type not found");
    return "Car type not found";
  }
  let matchingCarYear = +new Date(matchingCar.regDate).getFullYear();
  const matchingCars = types
    .filter(
      (car) =>
        car.typeName.replace(/ /g, "").toLowerCase() ===
          matchingCar.model.replace(/ /g, "").toLowerCase() &&
        +car.monthOfConstrFrom.substr(0, 4) <= matchingCarYear &&
        (+car.monthOfConstrTo.substr(0, 4) >= matchingCarYear || new Date())
    )
    .map((car) => car.carId);
  console.log(matchingCars);
  return matchingCars;
};

findCarByModel("520D XDRIVE", "2016");

module.exports = findCarByModel()