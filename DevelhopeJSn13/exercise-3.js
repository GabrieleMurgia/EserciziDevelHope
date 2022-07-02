const sum =  (a, b) => {
  return `(${a} + ${b})`;
}

const subtract =  (a, b) => {
  return `(${a} - ${b})`;
}

const multiply =  (a, b) => {
  return `${a} * ${b}`;
}

const divide =  (a, b) => {
  return `${a} / ${b}`;
}

const log = (a,b,c) => {
  let value = divide(subtract((multiply(sum(a,b),sum(c,a))),a),c)
  console.log(value);
}
log(2,4,5)