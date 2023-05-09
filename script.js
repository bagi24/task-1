//Task - 1

const isEqual = (a, b) => {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
};

const result = isEqual(5, 3); // არ არის ტოლი
console.log(result);

//Task - 2

const fahrenheitToCelsius = (a) => {
  if (typeof a === "number") {
    return (a - 32) / 1.8;
  } else {
    return false;
  }
};

console.log(fahrenheitToCelsius(5)); // -15

//Task - 3

const calculate = (a, b, operation) => {
  const operations = ["+", "-", "*", "/"];
  let isOperation = false;

  for (let value of operations) {
    if (operation === value) {
      isOperation = true;
    }
  }

  if (typeof a === "number" && typeof b === "number" && isOperation) {
    let result = eval(`${a} ${operation} ${b}`);
    return result;
  } else {
    return false;
  }
};
console.log(calculate(5, 2, "+")); //7
