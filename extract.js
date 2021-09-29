const fs = require("fs");
const path = require("path");

(() => {
  fs.readFile(
    path.join(__dirname, "database/vehicles_bmw.csv"),
    "utf8",
    (err, data) => {
      if (err) console.error(err);
      else {
        const dataArr = data.replace(/\n/g, "").split("\r").filter(Boolean); //.replace('', '').split(' ');
        let keys = dataArr[0].split(",").map((key) =>
          key
            .split("")
            .filter(
              (letter) =>
                letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 122
            )
            .join("")
        );
        let result = [];
        for (let i = 1; i < dataArr.length; i++) {
          let obj = {};
          let values = dataArr[i].split(",");
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
          }

          result.push(obj);
        }

        fs.writeFile(
          path.join(__dirname, "output/model.json"),
          JSON.stringify(result, null, 2),
          (err) => {
            if (err) console.error(err.message);
            else console.log("Models JSON created");
          }
        );
      }
    }
  );
})();

(() => {
  fs.readFile(
    path.join(__dirname, "database/vehicle_types.csv"),
    "utf8",
    (err, data) => {
      if (err) console.error(err);
      else {
        const dataArr = data.replace(/\n/g, "").split("\r").filter(Boolean); //.replace('', '').split(' ');
        dataArr;
        let keys = dataArr[0].split(",").map((key) =>
          key
            .split("")
            .filter(
              (letter) =>
                letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 122
            )
            .join("")
        );
        keys;
        let result = [];
        for (let i = 1; i < dataArr.length; i++) {
          let obj = {};
          let values = dataArr[i].split(",");
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i];
          }

          result.push(obj);
        }

        fs.writeFile(
          path.join(__dirname, "output/types.json"),
          JSON.stringify(result, null, 4),
          (err) => {
            if (err) console.error(err.message);
            else console.log("Types JSON created");
          }
        );
      }
    }
  );
})();
