
document.write('Hola desde javascript');
var salto = '<br>';

/*

calcular el area de un circulo,untriangulo o un cuadrado dependiendo de lo q1ue escoja el usuario,durante 4 ocasiones.se debe solicitar en cada uno de los problemas las variables necesarias para su desarrollo.

Areas:

     Formula                               Variables                 Constantes

circulo   = pi+R*R                            Radio                     Pi
triangulo = (B*H) /2                          Base,Altura               divisor
cuadrado = B*H                                Base,altura                 -

Hacer primero:
1.Definir constantes
2.Preguntar que se debe hacer
3.Realizar la operacion y mostrar resultado
4.Finalizar a la 4 operacion

Pedir info por teclado: prompt('mensaje','');


//definimos constantes y variables
const pi =3.1416;
const divisor =2;
var iterador = 1;
var radio;
var base;
let pregunta;
var area;



 //preguntamos en un ciclo lo que se debe hacer

 for(iterador = 1; iterador<=4; iterador++) {
 pregunta = prompt('area que desea hallar es,1.circulo, 2.triangulo, 3.cuadrado','');
 pregunta = parseInt(pregunta);
  if(pregunta < 0 || pregunta >3) {
  alert('opcion no valida');
  iterador = iterador;
  } 
  // condicionamos las opciones del usuario
  switch(pregunta) {
   case 1:
      var radio = prompt('digite el valor del radio','');
      radio = parseFloat(radio);
      area = pi*(radio * radio);
      document.write(salto,salto,'el valor del area del circulo es',area);
      break;
    case 2:
        var base = prompt('digite valor de la base','');
        var altura = prompt('digite el valor de la altura','');
        base =  parseFloat(base);
        altura = parseFloat(altura);
        area = (base * altura)/2;
        document.write(salto,salto,'el valor del area del triangulo es',area);

    break;
    case 3:
        var base = prompt('digite valor de la base','');
        var altura = prompt('digite el valor de la altura','');
        base = parseFloat(base);
        altura = parseFloat(altura);
        area = (base * altura);
        document.write(salto,salto,'el valor del area del triangulo es',area);
        break;

        default:
            let mensaje = 'opcion no valida';
            iterador = iterador - 1;
        break;

    
  }
  console.log(pregunta,iterador);
 }

 
algoritmo para realizar una o mas compras:

1.preguntar por producto a comprar
2.indicar valor del producto y si es mayor calcular y si es menor indicar que falta plata 
*/

const producto1 = 'comedero gato';
const precioprd1 = 12000;
let Compra = 1;
let total = 0;
do {
    let pregunta= prompt('escoja producto','');
    if (producto1 === pregunta) {
        total = total + precioprd1;
    }
    Compra = prompt('desea seguir comprando','');
    if (Compra  === 'si') {
        Compra = 1;
        
    } else {
        Compra = 0;
        
    }

} while (Compra === 1);
document.write('total a pagar',total);

