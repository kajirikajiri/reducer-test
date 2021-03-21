function sum() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = arr.reduce((acc, value) => acc + value);
  console.log('sum', sum);
}

sum()

function sum2(init) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = arr.reduce((acc, value) => acc + value, init);
  console.log('sum2', sum);
}

sum2(100)

function max() {
  const arr = [94, 39, 63, 87, 52, 3, 10, 95, 5];
  const max = arr.reduce((acc, value) => (acc > value ? acc : value));
  console.log('max', max);
}

max()

function min() {
  const arr = [94, 39, 63, 87, 52, 3, 10, 95, 5];
  const min = arr.reduce((acc, value) => (acc < value ? acc : value));
  console.log('min', min);
}

min()


function minOrMax(type) {
  const arr = [94, 39, 63, 87, 52, 3, 10, 95, 5];
  const min = arr.reduce((acc, value) => type === 'min' ? (acc < value ? acc : value):(acc > value ? acc : value));
  console.log(type, min);
}

minOrMax('min')
minOrMax('max')

function map() {
  const arr = [11, 22, 33];
  const result = arr.reduce((acc, value, index) => {
    acc[index] = 1000 + value;
    return acc;
  }, []);
  console.log('map',result);
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
  console.log('filter', result);
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
  console.log('flatten',result);
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
  console.log('find',result);
}

find()

function forEach() {
  const arr = [11, 22, 33];
  arr.reduce((_, value, index) => {
    console.log('foreach', index, value);
  }, undefined);
}

forEach()
