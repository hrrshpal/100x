//////////////////////////////////////STRING FUNCTION///////////////////////////////////////////////////
// Length
let str = "JOJOJOJOJOJOJOJOJOJOJO"
console.log(str.length)
  
  // indexOf
let str2="INDEXOFFUNCTION"
console.log(str2.indexOf("X"))
  
  // lastIndexOf
let str3 = "LASTINDEXOFFUNCTION"
console.log(str3.lastIndexOf("T"))
  
  // slice
let str4 = "SLICEFUNCTION"
console.log(str4.slice(0,5))
  
  // substring
let str5 = "SUBSTRINGFUNCTION"
console.log(str5.substring(5,9))
  
  // replace
let str6 = "REPLACEFUNCTION"
console.log(str6.replace("REPLACE","WORKING"))
  
  // split
let str7 = "Hello ji kya haal chaal"
console.log(str7.split(" "))
  
  // trim
let str8 = "                      HEHEHEHHEHEHEHEHEHEHHE                       "
console.log(str8.trim())
  
  // toUpperCase
let str9 = "jojobizzareadventure"
console.log(str9.toUpperCase())
  
  // toLowerCase
let str10 = "JOJOKILLMONGER"
console.log(str10.toLowerCase())


  ///////////////////////////////////////////////////////NUMBER FUNCTIONS/////////////////////////////////////////////////////
  function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");

  ///////////////////////////////////////////////////////////ARRAY FUNCTIONS/////////////////////////////////////////////////////

// Array:   push(), pop(), shift(), unshift(), splice(), slice(), concat(), forEach(), map(), filter(), reduce(), find(), sort()
// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);
  
  // pop()
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  // shift()
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift()
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat()
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  // forEach()
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);