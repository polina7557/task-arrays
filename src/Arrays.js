export function arraySorting(data) {
  const arr = data.split(',').map(Number);
  arr.sort((a, b) => a - b);
  return arr.join(',');
}

export function arrayFiltering(data) {
  return data.filter((num) => num <= 100);
}

export function arrayPushing(array1, array2) {
  const result = [];
  const len = Math.min(array1.length, array2.length, 5);
  for (let i = 0; i < len; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
}