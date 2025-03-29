
//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice. 
let mediaLibrary = [
    ['1Q84', 'Cloud Atlas', 'Hitchhikers Gudide to the Galaxy'],
    ['Sirens of Titan', 'Mad Max', 'Fight Club'],
    ['The Song of Achilles', 'Dune', 'The Road']
]


//Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log(mediaLibrary[0][0]); //First row
console.log(mediaLibrary[0][1]);
console.log(mediaLibrary[0][2]);

console.log(mediaLibrary[1][0]); //Second Row
console.log(mediaLibrary[1][1]);
console.log(mediaLibrary[1][2]);

console.log(mediaLibrary[2][0]); //Third Row
console.log(mediaLibrary[2][1]);
console.log(mediaLibrary[2][2]);

//Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item. 

let row;
let item;
for(row = 0; row < mediaLibrary.length; row++){
    for (item = 0; item < mediaLibrary[row].length; item++){
        console.log(mediaLibrary[row][item]);
    }
}

//Task 4: Write a loop that prints all the items on the second shelf. 
for (let i = 0; i <mediaLibrary[1].length; i++){
    console.log(mediaLibrary[1][i]);
}





