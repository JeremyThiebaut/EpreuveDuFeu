/**
 * Echauffement

Créez un programme qui affiche un rectangle dans le terminal.

Exemples d’utilisation :
$> python exo.py 5 3
o---o
|   |
o---o

$> python exo.py 5 1
o---o

$> python exo.py 1 1
o

Gérer les problèmes potentiels d’arguments.
 */

/****************
 *   Formatting  *
 ****************/
// Create an array using the correct characters per line and return the result
const makeCube = (width, height) => {
  const newCube = new Array();
  for (let i = 0; i < height; i++) {
    let newRow = "";
    for (let y = 0; y < width; y++) {
      if (
        (i === 0 && y === 0) ||
        (i === 0 && y === width - 1) ||
        (i === height - 1 && y === 0) ||
        (i === height - 1 && y === width - 1)
      ) {
        newRow += "O";
      } else if (i === 0 || i === height - 1) {
        newRow += "-";
      } else if (y === width - 1 || y === 0) {
        newRow += "|";
      } else {
        newRow += " ";
      }
    }
    newCube.push(newRow);
  }
  return newCube;
};

/********************
 *      Parsing      *
 ********************/
// Retrieve the desired dimensions and give them to the function
const parsing = () => {
  const size = process.argv;
  size.splice(0, 2);
  if (
    size.length != 2 ||
    size[0] < 1 ||
    size[1] < 1 ||
    isNaN(size[0]) ||
    isNaN(size[1])
  ) {
    return error();
  } else {
    return makeCube(size[0], size[1]);
  }
};

/**********************
 *   Error management  *
 **********************/
// Return errors
const error = () => {
  console.log("error");
  process.exit();
};

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length - 1; i++) {
    newString += `${result[i]}\n`;
  }
  newString += `${result[result.length - 1]}`;
  console.log(newString);
};

/********************
 *        Main       *
 ********************/
// Get the result
const result = parsing();

/********************
 *       Result      *
 ********************/
// Execute the function
displayArray(result);
