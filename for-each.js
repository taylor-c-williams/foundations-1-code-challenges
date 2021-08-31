// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

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

export function makeArrayOfNames(arr) {
    let arrNames = [];
    arr.forEach(item => {
        arrNames.push(item.name);        
    });
    return arrNames;
}



/*
Output:

['cat', 'frog', 'dog', 'dog']

*/

export function makeReversedArrayOfTypes(arr) {
    let reverseTypes = [];
    arr.forEach (petType => {        
        reverseTypes.push(petType.type);
        reverseTypes.reverse();
    });
    return reverseTypes;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let espanol = [];
    arr.forEach(pet =>{
        espanol.push({
            nombre: pet.name,
            tipo: pet.type                   
        });       
    });
    return espanol;
}

