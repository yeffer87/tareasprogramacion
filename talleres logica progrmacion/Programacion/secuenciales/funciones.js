// Constantes del formato:
var salto = '<br>';

// Problema a resolver:
var problema = '1. Haga un algoritmo que calcule e imprima el área de un circulo =>Área = π r 2';
document.write(problema,salto);

// Variables a ingresar: 
var radio = 20; // Variable

// Constantes:
var pi = 3.1416;  

// Operaciones:
var area = (pi*(radio*radio));

// Resultado : 
document.write('Área = ', area,salto, salto);

//problema a resolver

var problema2 = '2.Haga un algoritmo que calcule e imprima el área de un triángulo => Área =(b*h) / 2';
document.write(problema2,salto);

//variables a ingresar
var base=30;
var altura=30; //variables

//operaciones
var area = (base*altura/2);

//resultado:
document.write('area =',area, salto, salto);

//problema a resolver

var problema3 = '3. Diseñar un algoritmo a través del cual se pueda calcular la siguiente expresión'
document.write(problema3,salto);

//variables a ingresar
//variables
var y1=9;
var y2=2;
var x1=4;
var x2=7; 

//operaciones
var z= ((y1-y2) / (x1-x2));

//resultado:
document.write("z= ", z , salto, salto)

//problema a resolver 

var problema4 = "4. Diseñe un algoritmo para la conversión de una medida de metros a pies y pulgadas, donde se sabe que 1 metro es igual a 3.28 pies y 1 pie es igual a 12 pulgadas."
document.write(problema4, salto);

//variables a ingresar
//variables

var metros=6;

//constantes
var metros =3.28;
var pulgadas = 12;

//operaciones
var pies = 6*3.28;
var pulgadas =pies*12;

//resultado
document.write("el numero de metros es =", metros , salto, "el numero en pies es =",pies, salto, "el numero de pulgadas es= ", pulgadas, salto, salto);

//problema a resolver

var problema5 = "5. Elabore un algoritmo que convierta una temperatura dada en centígrados a fahrenheit. Tener en cuenta la siguiente fórmula: ºF= 9/5 ºC + 32"
document.write(problema5, salto);

//variables a ingresar
//variables

 var centigrados = 7;

//operaciones

var farenheit = (7*9/5+32);

//resultado
document.write("los grados centigrados son =", centigrados, salto," los grados farenheit son= ",farenheit, salto, salto);

//problema a resolver

var problema6 = "6. Hacer un algoritmo para calcular el IVA de un valor digitado por el teclado, mostrar este resultado y el de sumar el IVA al valor digitado."
document.write(problema6, salto);

//variables a ingresar
//variables

var ValorD = 5000;

//constante

var PorcIva = 0.19;

//operaciones

var Iva = (5000*0.19);
var VDiva = (5000+950);

//resultado
document.write("el valor del iva es =",Iva, salto,"el valor digitado con el iva es =",VDiva, salto, salto);

//problema a resolver

var problema7 = "7.Elabore un algoritmo para mostrar la cantidad de miles, centenas, decenas y unidades de un número entero digitado por teclado."
document.write(problema7,salto);

//variables a ingresar
//variables

var cifra = 4387

//constante

var miles;
var centenas;
var decenas;
var unidades;

//operaciones

var miles =(cifra / 1000);
var miles = Math.floor(miles);
var miles=miles;
var centenas=(cifra / 100);
var centenas= Math.floor(centenas);
var centenas= centenas - ( miles * 10);
var centenas = centenas;
var decenas = (cifra / 10);
var decenas = Math.floor(decenas);
var decenas = decenas - ((miles * 100) + (centenas * 10));
var decenas = decenas;
var unidades = cifra - ((miles * 1000) + (centenas * 100) + (decenas * 10));
var unidades = unidades;

//resultado
document.write( "la cifra es =",cifra,salto,"el numero de la cifra en miles es =",miles, salto, "el numero de centenas son =", centenas,salto, "el numero de decenas son =",decenas, salto, "el numero de unidades son =",unidades, salto, salto)

//problema a resolver
var problema8 = "8. Elaborar un algoritmo que permita leer el nombre de un empleado, el número de horas extras diurnas, horas extras nocturnas y el valor básico hora. Se debe calcular el valor a pagar en una quincena teniendo en cuenta que el recargo de la hora extra diurna es del 25% y el de la nocturna es del 75%."
document.write(problema8,salto);

//variables a ingresar
//variables

var hxd = 6;
var hxn = 2;
var vhb = 8000;

//constantes

var Usuario = "yeffer";
var rxd = 1.25;
var rxn = 1.75;
var dt = 15;

//operaciones

var vdt = (8000 * 15);
var vrxd = (8000 * 1,25);
var vrxn = (8000 * 1,75);
var vtp = (vdt +((vrxd*6)+(vrxn*2)));

//resultado
document.write( "nombre de empleado:",Usuario,salto,"horas extra diurnas:",hxd,salto,"horas extra nocturnas:",hxn,salto,"valor basico horas:",vhb,salto,"Total a pagar al empleado =",vtp,salto,salto);


//problema a resolver
var problema10 = "10. Elaborar un algoritmo que permita leer el nombre y valor de venta de 3 productos de una tienda de insumos agrícolas. Sobre el 1er producto se hace un descuento del 2.5%, sobre el 2º un descuento del 1.8% y sobre el 3ro el 1.3%. Se debe calcular el valor final que debe de pagar el cliente por la mercancía comprada."
document.write(problema10,salto);

//variables a ingresar
//variables

var p1 = "motor";
var v1 = 8000;
var p2 = "nerf";
var v2 = 2000;
var p3 = "menta";
var v3 = 7000;

//constante

var descu1 = 0.025;
var descu2 = 0.018;
var descu3 = 0.013;

//operaciones

var v1 = v1 - (v1 * 0.025);
var v2 = v2 - (v2 * 0.018);
var v3 = v3 - (v3 * 0.013);

//resultado
document.write("nombre del producto:",p1,salto,"valor producto con descuento=",v1,salto,"nombre del producto:",p2,salto,"valor producto con descuento=",v2,salto,"nombre del producto:",p3,salto,"valor producto con descuento=",v3,salto,salto);

//problema a resolver
var problema11 = "11. En la prueba final de atletismo de los 50 metros planos en los juegos olímpicos, se obtuvo el tiempo utilizado por cada uno de los 8 atletas participantes. Se debe imprimir la velocidad promedio (Metros/Segundos) en que los atletas corrieron."
document.write(problema11,salto);

//variables a ingresar
//variables

var v1 = 5;
var v2 = 9;
var v3 = 7;
var v4 = 6;
var v5 = 3;
var v6 = 4;
var v7 = 5;
var v8 = 8;

//constantes

var m = 50;

//operaciones

var Vpa = ((m/v1) + (m/v2) + (m/v3) + (m/v4) + (m/v5) + (m/v6) + (m/v7) + (m/v8));

//resultado
document.write("Velocidad de los corredores:",salto,"v1=",v1,salto,"v2=",v2,salto,"v3=",v3,salto,"v4=",v4,salto,"v5=",v5,salto,"v6=",v6,salto,"v7=",v7,salto,"v8=",v8,salto,"metros totales recorridos=",m,salto, "promedio recorrido de los corredores:",Vpa,salto,salto);

//problema a resolver
var problema12 = "12.Elaborar un algoritmo que permita intercambiar el valor de dos variables. Ejemplo: Si la variable A=5 y la B=8, luego del proceso debe quedar así: A=8 y B=5."
document.write(problema12,salto);

//variables a ingresar
//variables

var ao = 30;
var bo = 10;

//operaciones

var A = (ao+bo);
var b = ((A-bo)-bo);
var a = ((ao+bo)-bo);

//resultado
document.write("originalmente los valores eran:",salto,"a=",ao,salto,"b=",bo,salto,"al intercambiar valores quedaria:",salto,"a=",a,salto,"b=",b,salto,salto);
//no entiendo la razon por la cual no funciono la secuencia ya que si la hacemos en calculadora funciona perfecto. espero explicacion del profe








//----------------------------------------

var salariosemanal ;
var horastraba = 45
const horasnorm = 40
var horasext = 5 
const horas = 16;
const cuarenmas = 20
var operacion1 = (horas*horasnorm) + (cuarenmas*horasext)
var operacion2 = (horas*horasnorm)

if (horastraba > horasnorm) {
    document.write("tu salario semanal es de=",operacion1,salto);

} else {   
document.write("tu salario semanal es de =",operacion2,salto,);

}


var problema7 =document.write("7) Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.")
document.write(problema7,salto,salto);

var tiempo ;
var calorias;
var dormir = true
const dia = 24
const actdormir = 1.08;
const actreposo = 1.66;

if (dormir) {
    var tiempo = 5
    var calorias = (actdormir*60)*tiempo;
    document.write("en las", tiempo, "horas que durmio,gasto un total de=", calorias,"calorias",salto);
    
} else {
    var tiempo = 3 
    var calorias = (actreposo*60)*tiempo;
    document.write("en las", tiempo , "horas que gasto en reposos,gasto un total de=", calorias,"calorias",salto);
    
}