const fs = require("fs");
const path = require("path");

// exports nos permite que las propiedades y metodos del modulo esten disponibles fuera de el

function filter(dir, filterStr, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }

    // filtro los archivos que cumplen con la extension que busco
    list = list.filter(file => {
      return path.extname(file) === filterStr;
    });

    list = list.filter(f => path.extname(f) === filterStr);

    callback(null, list);
  });
}

module.exports = {
  filter
};
