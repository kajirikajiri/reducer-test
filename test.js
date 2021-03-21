function sum() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = arr.reduce((acc, value) => acc + value);
  console.log(sum);
}

sum()

function max() {
  const arr = [94, 39, 63, 87, 52, 3, 10, 95, 5];
  const max = arr.reduce((acc, value) => (acc > value ? acc : value));
  console.log(max);
}

max()

function map() {
  const arr = [11, 22, 33];
  const result = arr.reduce((acc, value, index) => {
    acc[index] = 1000 + value;
    return acc;
  }, []);
  console.log(result);
}

map()

function filter() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = arr.reduce((acc, value) => {
    if (value % 3 === 0) {
      acc.push(value);
    }
    return acc;
  }, []);
  console.log(result);
}

filter()

function flatten() {
  const arr = [
    11,
    [22, 33],
    44,
    [55, 66, 77],
  ];
  const result = arr.reduce((acc, value) => acc.concat(value), []);
  console.log(result);
}

flatten()

function find() {
  const arr = [
    { id: '101', name: 'Alice' },
    { id: '102', name: 'Bob' },
    { id: '103', name: 'Charlie' },
  ];
  const result = arr.reduce((acc, value) => {
    if (acc) {
      return acc;
    }
    if (value.id === '102') {
      return value;
    }
    return undefined;
  }, undefined);
  console.log(result);
}

find()

function forEach() {
  const arr = [11, 22, 33];
  arr.reduce((_, value, index) => {
    console.log(index, value);
  }, undefined);
}

forEach()
