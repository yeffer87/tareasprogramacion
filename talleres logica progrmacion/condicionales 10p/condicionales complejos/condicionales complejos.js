// Constantes del formato:
var salto = "<br>";

//estructuras complejas 

var problema1="1) Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.",salto,salto;
document.write(problema1,salto,salto);

var nume1 = 3
var nume2 = 5
var resultado ;
var operacion;

if (nume1 === nume2) {
    operacion = "multiplicacion"
    resultado= (nume1*nume2);
    
}

if (nume1 > nume2) {
    operacion = "resta"
    resultado= nume1-nume2
    
}

if (nume1 < nume2) {
    operacion = "suma"
    resultado = nume1+nume2
    
}
document.write("los numeros ingresados son:", nume1, "  y  ",  nume2,salto, "la operacion ejecutada fue:", operacion,salto,"dando como resultado:",resultado,salto,salto);


var problema2="2) Leer tres números diferentes e imprimir el número mayor de los tres.",salto,salto;
document.write(problema2,salto,salto)

var nume1 = 6
var nume2 = 4
var nume3 = 1
var resultado ;

if (nume1 > nume2 & nume1 > nume3 ) {
    resultado = nume1;
    
}
if (nume2 > nume1 & nume2 > nume3) {
    resultado = nume2;
    
}
if (nume3 > nume1 & nume3 > nume2) {
    resultado = nume3;
    
}
document.write("el numero mayor ingresado es=",resultado,salto,salto);

var problema3="3)  Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple.",salto;
document.write(problema3,salto,salto)

var horastr ;
var horasex = horastr-40
var pagosex1 = horasex*2
var pagosex2 

//constantes

const limith = 40












