let num = 12345; // static input
let count = 0;

while (num !== 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log(`Number of digits: ${count}`);
