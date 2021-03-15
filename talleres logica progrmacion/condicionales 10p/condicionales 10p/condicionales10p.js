// Constantes del formato:
var salto = '<br>';

//problema a resolver

var problema5 =("5) Un hombre desea saber cuánto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7000, y en ese caso desea saber cuánto dinero tendrá finalmente en su cuenta.")
document.write(problema5,salto,salto)

var problema4 = (") Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: Si trabaja 40 horas o menos se le paga un salario de $16 por hora, si trabaja más de 40 horas se le paga un salario de $16 por cada una de las primeras 40 horas y un salario de $20 por cada hora extra.")
document.write(problema4,salto,salto);


var salariosemanal = 20000
var horastraba = 45
const horasnorm = 40
var horasext = 5 
const horas = 16;
const cuarenmas = 20

if (horastraba > horasnorm) {
    operacion1 = (horas*horasnorm) + (cuarenmas*horasext)
    document.write("tu salario semanal es de=",operacion1,salto,salto);

} else {   
    operacion2 = (horas*horasnorm)
document.write("tu salario semanal es de =",operacion2,salto,salto);

}

//problema a resolver

var problema6 =("6) Realizar un algoritmo Que lea dos números y los imprima en forma ascendente");
document.write(problema6,salto,salto);

//variables

var num1 = 16
var num2 = 13

//operaciones
if (num1 > num2) {
    document.write("numeros ingresados",num1,",", num2,salto,"el numero mas grande es:",num1,salto,"el numero menor es:",num2,salto,salto);
    
} else {
    document.write("numeros ingresados",num1,",",num2,salto,"el numero mas grande es:",num2,salto,"el numero menor es:",num1,salto,salto);
}

//problema a resolver

var problema7 =("7) Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.")
document.write(problema7,salto,salto);

//variables

var tiempo ;
var calorias;
var dormir = true

//constantes

const dia = 24
const actdormir = 1.08;
const actreposo = 1.66;

if (!dormir) {
    var tiempo = 5
    var calorias = (actdormir*60)*tiempo;
    document.write("en las",  tiempo , "horas que durmio,gasto un total de=", calorias,"calorias",salto,salto);
    
} else {
    var tiempo = 3 
    var calorias = (actreposo*60)*tiempo;
    document.write("en las",  tiempo , "horas que gasto en reposos,gasto un total de=", calorias,"calorias",salto,salto);
    
}

//problema a resolver

var problema8 =("8) Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves).")
document.write(problema8,salto,salto)

//variables

var p1 = "galletas"
var clave=true
var preciodes ;
var preciori = 50000

//constantes
const clave1 = "clave 1"
const clave2 = "clave 2"
const desclave1 = 10
const desclave2 = 20

//condicionales

if (clave) {
    var preciodes=(preciori*desclave1)/100
    var totalpro1=(preciori-preciodes)
    document.write("nombre del producto: ",p1,salto,"clave:",clave1,salto,"descuento",desclave1,"%",salto,"total del producto con descuento:$",totalpro1,salto,salto)

    
} else  {
    var preciodes=(preciori*desclave2)/100
    var totalpro2=(preciori-preciodes)
    document.write("nombre del producto:",p1,salto,"clave:",clave2,salto,"descuento",desclave2,"%",salto,"total del producto con descuento:$",totalpro2,salto,salto)
 

}

var problema9 = ("9) Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%");
document.write(problema9,salto,salto);

//variables

var totalpag ;
var camisas = 2
var totalcom = 15000

//constantes

const descuen1 = 20
const descuen2 = 10

//operacion

if (camisas >= 3) {
    descuento = (totalcom*descuen1)/100
    totalpag =totalcom-descuento
    document.write("camisas compradas" , camisas,salto,"total compra:$", totalcom,salto,"descuento de:",descuen1,"%",salto,"total a pagar:$",totalpag,salto);


} else {
    descuento = (totalcom*descuen2)/100
    totalpag = totalcom-descuento
    document.write("camisas compradas:", camisas,salto,"total compra:$",totalcom,salto,"descuento de:",descuen2,"%",salto,"total a pagar:$",totalpag,salto);
    
}

//problema a resolver

var problema10 = ("10) Una empresa quiere hacer una compra de varias piezas de la misma clase a una fábrica de refacciones. La empresa, dependiendo del monto total de la compra, decidirá qué hacer para pagar al fabricante. Si el monto total de la compra excede de $500 000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante. Si el monto total de la compra no excede de $500 000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague a crédito.");
document.write(problema10,salto,salto)

//variantes





