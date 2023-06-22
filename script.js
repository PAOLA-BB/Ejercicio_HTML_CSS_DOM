/*
const juana = 0;
const pedro = 0;
const totalaqua = 0;
*/

//aqua
let cantidadaqua = prompt("ingrese cantidad aqua");
let aqua = 200;

if(aqua > 0){
    aqua = aqua * cantidadaqua;    
    console.log(aqua);
}else{
    console.log("dato incorrecto");
}

//emocion
let cantidademocion = prompt("ingrese cantidad emocion");
let emocion = 180;

if(emocion > 0){
    emocion = emocion * cantidademocion;    
    console.log(emocion);
}else{
    console.log("dato incorrecto");
}

//alegria
let cantidadalegria = prompt("ingrese cantidad alegria");
let alegria = 160;

if(alegria > 0){
    alegria = alegria * cantidadalegria;    
    console.log(alegria);
}else{
    console.log("dato incorrecto");
}

//frescura
let cantidadfrescura = prompt("ingrese cantidad frescura");
let frescura = 150;

if(frescura > 0){
    frescura = frescura * cantidadfrescura;    
    console.log(frescura);
}else{
    console.log("dato incorrecto");
}

const totalcantidad = (cantidadaqua + cantidademocion + cantidadalegria + cantidadfrescura);
console.log(totalcantidad);
const valortotal = (aqua + emocion + alegria + frescura);
console.log(valortotal);