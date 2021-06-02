//header
document.write(  
`
<div class="container-fluid">
<div class="row">
  <div class="col-4 ml-2">
    <h1 class="titulo">Notas Finales</h1>
  </div>
  <div class="col-4 ml-2 ">
    <img src="assets/img/logo.png" alt="logo" class=logo ></div>
</div>
</div>
`
    )
//Datos Principales
var nombre= prompt("Ingrese su nombre y apellido ","")
var carrera= prompt("Ingrese su Carrera","")

    document.write(
        `
        <div class="datos">
        <p>Nombre:${ nombre}</p>
        <p>Carrera:${ carrera}</p>
        </div>
        `
    )




//Primer Ramo
var ramo1= prompt("Ingrese el Primer Ramo","")
var ramo1nota=prompt("Ingresa la primera nota","")
var ramo1nota2=prompt("Ingresa la segunda nota","")
var ramo1nota3=prompt("Ingresa la tercera nota","")

//Suma Ramo1
var sumando1 = ramo1nota; 
var sumando2 = ramo1nota2; 
var sumando3 = ramo1nota3; 

ramo1nota = parseInt(ramo1nota);
ramo1nota2 = parseInt(ramo1nota2);
ramo1nota3 = parseInt(ramo1nota3);

suma1= ramo1nota+ramo1nota2+ramo1nota3;
suma1     = parseInt(suma1);

//División ramo1

var dividendo = suma1; var divisor = 3; 
total_divi1 = suma1/3;
total_divi1= parseInt(total_divi1);

//Segundo Ramo
var ramo2= prompt("Ingrese el Segundo Ramo","")
var ramo2nota=prompt("Ingresa la primera nota","")
var ramo2nota2=prompt("Ingresa la segunda nota","")
var ramo2nota3=prompt("Ingresa la tercera nota","")

//Suma Ramo2
var sumando1r2 = ramo2nota; 
var sumando2r2 = ramo2nota2; 
var sumando3r2 = ramo2nota3; 

ramo2nota = parseInt(ramo2nota);
ramo2nota2 = parseInt(ramo2nota2);
ramo2nota3 = parseInt(ramo2nota3);

suma2= ramo2nota+ramo2nota2+ramo2nota3;
suma2     = parseInt(suma2);

//División ramo2

var dividendo = suma2; var divisor = 3; 
total_divi2 = suma2/3;
total_divi2= parseInt(total_divi2);


//Tercer Ramo
var ramo3= prompt("Ingrese el Tercer Ramo","")
var ramo3nota=prompt("Ingresa la primera nota","")
var ramo3nota2=prompt("Ingresa la segunda nota","")
var ramo3nota3=alert("Nota Pendiente","")

//Suma Ramo3
var sumando1r3 = ramo3nota; 
var sumando2r3 = ramo3nota2; 

ramo3nota = parseInt(ramo3nota);
ramo3nota2 = parseInt(ramo3nota2);
ramo3nota3 = parseInt(ramo3nota3);

suma3= ramo3nota+ramo3nota2;
suma3 = parseInt(suma3);

//División ramo3

var dividendo = suma3; var divisor = 2; 
total_divi3 = suma3/2;
total_divi3= parseInt(total_divi3);


//Tabla Notas

document.write(
    `
    <table class="table ml-3">
        <thead class='bg-dark text-white'>
          <tr>
            <th scope="col">Ramo</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${ramo1}</th>
            <td>${ramo1nota}</td>
            <td>${ramo1nota2}</td>
            <td>${ramo1nota3}</td>
            <td>${total_divi1}</td>
          </tr>
          <tr>
          <th scope="row">${ramo2}</th>
          <td>${ramo2nota}</td>
          <td>${ramo2nota2}</td>
          <td>${ramo2nota3}</td>
          <td>${total_divi2}</td>
          </tr>
          <tr>
          <th scope="row">${ramo3}</th>
          <td>${ramo3nota}</td>
          <td>${ramo3nota2}</td>
          <td>pendiente</td>
          </tr>
        </tbody>
      </table>
    `
)

// Mensaje aprobación
var notafaltante=12-suma3;
notafaltante= parseInt(notafaltante);


if(suma3<12)
 {
    document.write(
        `
        "Para aprobar el ramo"${ramo3}"necesitas obtener un " ${notafaltante}
        `
        );
}


