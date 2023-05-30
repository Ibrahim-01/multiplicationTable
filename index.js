
// MULTIPLICATION-TABLE 
const table = document.getElementById("multi")
const multiplicationIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let result = ''
for (const i of multiplicationIndex) {
  for (let b = 1; b <= 12; b++) {
    const result = `${i} x ${b} = ${i * b}`
  }
}
table.textContent = result
// MULTIPLICATION-TABLE END


