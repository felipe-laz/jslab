const array = [1, 2, 10, 16];

// MAP
const mapArray = array.map(num => num * 2);
console.log('map', mapArray); // map é apenas para nomear

// FILTER
const filterArray = array.filter(num => num === 5);
console.log('filter', filterArray);

// REDUCE
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
},0);
console.log('reduce', reduceArray);