//variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion


//Global Scope
var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
     country = 'Colombia'; //global porque no se le a colocado el var, let, costant
     //console.log(country)
    
}
countries();
console.log(country)