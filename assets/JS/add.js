

let a = +prompt('длина стороны (в см.)');
console.log(`Длина стороны ${a} см.`);

let p = a * 4;
p = Math.round(p*10) / 10;
console.log(`Периметр квадрата ${a*4} см.`); 