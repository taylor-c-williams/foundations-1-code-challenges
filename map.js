// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const mapped = arr.map (item => item.name);
    return mapped;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = 
   arr.map ((item) =>{
       item.isHungry = true;
       return item;
   });
    return hungry;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shout = arr.map (item => {
        return { 
            name: item.name.toUpperCase(),
            type: item.type
        };
    });    
    return shout;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let stringy = [];
    arr.map (item =>{
        stringy.push(item.name + item.type);     
    });        
    return stringy;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {

    let nameArray = [];
    arr.map (item =>{
        nameArray.push([Object.keys(item)[0], item.name]);
    });
    let typeArray = [];
    arr.map (item =>{
        typeArray.push([Object.keys(item)[1], item.type]);
    });
    let arrayArray = [nameArray, typeArray];
    return arrayArray; 
}
   