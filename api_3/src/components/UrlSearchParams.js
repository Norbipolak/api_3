/*The URLSearchParams interface provides utility methods to work with the query string of a URL. 
It makes it easy to parse, manipulate, and create query strings. 
Here's a detailed explanation and examples of how to use URLSearchParams.
*/

//From an Existing Query String:
const params = new URLSearchParams('?name=John&age=30');

//From a URL Object:
const url = new URL('https://example.com?name=John&age=30');
const params1 = new URLSearchParams(url.search);

//From an Object or an Array of Arrays:
const paramsFromObject = new URLSearchParams({ name: 'John', age: '30' });
const paramsFromArray = new URLSearchParams([['name', 'John'], ['age', '30']]);


//Methods of URLSearchParams

/*Getting Values
get(name): Returns the first value associated with the given search parameter.
*/
console.log(params.get('name')); // "John"

/*
getAll(name): Returns all the values associated with the given search parameter.
*/
console.log(params.getAll('name')); // ["John"]

/*
Setting and Modifying Values
set(name, value): Sets the value of the given search parameter. If there are multiple values, it deletes the others.
*/
params.set('name', 'Doe');
console.log(params.toString()); // "name=Doe&age=30"

/*
append(name, value): Appends a new value to the existing search parameter.
*/
params.append('hobby', 'reading');
params.append('hobby', 'sports');
console.log(params.toString()); // "name=Doe&age=30&hobby=reading&hobby=sports"
/*
Deleting Values
delete(name): Deletes the given search parameter and its associated values.
*/
params.delete('age');
console.log(params.toString()); // "name=Doe&hobby=reading&hobby=sports"
/*
Checking for Parameters
has(name): Returns a boolean indicating whether the parameter exists.
*/
console.log(params.has('name')); // true
console.log(params.has('age')); // false

/*
Iterating Over Parameters
forEach(callback): Iterates over each key-value pair in the query string.
*/
params.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// name Doe
// hobby reading
// hobby sports