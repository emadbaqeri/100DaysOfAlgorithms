function add(numA: number, numB: number): number {
  return numA + numB;
}

add(1, 2);

function addArrayItems(...params: number[]): number {
  let total = 0;
  params.forEach((num) => {
    total += num;
  });
  return total;
}

addArrayItems(1, 3, 4);
