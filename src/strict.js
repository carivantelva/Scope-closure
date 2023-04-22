'use strict';

pi = 3.1416;
console.log(pi);

function myFunction(){
    'use strict'; // con esta linea se usa un modo estricto donde no deja seguir sin definir 
    return pi = 3.1416;
}

console.log(myFunction());