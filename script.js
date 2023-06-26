

let totalcantidad = document.getElementById('totalcantidad');
let valortotal = document.getElementById('valortotal');
let juana = document.getElementById('juana');


juana.addEventListener('click', function () {

    //aqua
    let cantidadaqua = parseInt(prompt("ingrese cantidad aqua"));
    let aqua = 200;

    if (aqua > 0) {
        aqua = aqua * cantidadaqua;
        console.log(aqua);
    } else {
        console.log("dato incorrecto");
    }

    //emocion
    let cantidademocion = parseInt(prompt("ingrese cantidad emocion"));
    let emocion = 180;

    if (emocion > 0) {
        emocion = emocion * cantidademocion;
        console.log(emocion);
    } else {
        console.log("dato incorrecto");
    }

    //alegria
    let cantidadalegria = parseInt(prompt("ingrese cantidad alegria"));
    let alegria = 160;

    if (alegria > 0) {
        alegria = alegria * cantidadalegria;
        console.log(alegria);
    } else {
        console.log("dato incorrecto");
    }

    //frescura
    let cantidadfrescura = parseInt(prompt("ingrese cantidad frescura"));
    let frescura = 150;

    if (frescura > 0) {
        frescura = frescura * cantidadfrescura;
        console.log(frescura);
    } else {
        console.log("dato incorrecto");
    }

    const totalcantidad = (cantidadaqua + cantidademocion + cantidadalegria + cantidadfrescura);
    console.log(totalcantidad);
    const valortotal = (aqua + emocion + alegria + frescura);
    console.log(valortotal);

    let nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'La cantidad Total de Productos Vendidos por Juana es: ' + totalcantidad;
    document.body.appendChild(nuevoElemento);

    let nuevoElemento1 = document.createElement('p');
    nuevoElemento1.textContent = 'El Valor Total de Productos Vendidos por Juana es: ' + valortotal;
    document.body.appendChild(nuevoElemento1);

});


pedro.addEventListener('click', function () {

    //aqua
    let cantidadaqua = parseInt(prompt("ingrese cantidad aqua"));
    let aqua = 200;

    if (aqua > 0) {
        aqua = aqua * cantidadaqua;
        console.log(aqua);
    } else {
        console.log("dato incorrecto");
    }

    //emocion
    let cantidademocion = parseInt(prompt("ingrese cantidad emocion"));
    let emocion = 180;

    if (emocion > 0) {
        emocion = emocion * cantidademocion;
        console.log(emocion);
    } else {
        console.log("dato incorrecto");
    }

    //alegria
    let cantidadalegria = parseInt(prompt("ingrese cantidad alegria"));
    let alegria = 160;

    if (alegria > 0) {
        alegria = alegria * cantidadalegria;
        console.log(alegria);
    } else {
        console.log("dato incorrecto");
    }

    //frescura
    let cantidadfrescura = parseInt(prompt("ingrese cantidad frescura"));
    let frescura = 150;

    if (frescura > 0) {
        frescura = frescura * cantidadfrescura;
        console.log(frescura);
    } else {
        console.log("dato incorrecto");
    }

    const totalcantidad = (cantidadaqua + cantidademocion + cantidadalegria + cantidadfrescura);
    console.log(totalcantidad);
    const valortotal = (aqua + emocion + alegria + frescura);
    console.log(valortotal);


    let nuevoElemento2 = document.createElement('p');
    nuevoElemento2.textContent = 'La cantidad Total de Productos Vendidos por Pedro es: ' + totalcantidad;
    document.body.appendChild(nuevoElemento2);

    let nuevoElemento3 = document.createElement('p');
    nuevoElemento3.textContent = 'El Valor Total de Productos Vendidos por Pedro es: ' + valortotal;
    document.body.appendChild(nuevoElemento3);

});

ganador.addEventListener('click', function () {

    let totalJuana = parseInt(prompt("ingrese valor Ventas de Juana: "));
    let totalPedro = parseInt(prompt("ingrese valor Ventas de Pedro: "));
    let ganador = document.getElementById('ganador');
    ganador = document.createElement('p');
   
    if (totalJuana > totalPedro) {
        ganador.textContent = "JUANA GANA";
        document.body.appendChild(ganador);
    } else if (totalPedro > totalJuana) {
        ganador.textContent = "PEDRO GANA";
        document.body.appendChild(ganador);
    } else {
        ganador.textContent = "EMPATE";
        document.body.appendChild(ganador);
    }
});



