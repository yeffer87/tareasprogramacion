// Constantes del formato:
var salto = '<br>';

//problema a resolver

var problema5 = document.write("5) Un hombre desea saber cuánto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7000, y en ese caso desea saber cuánto dinero tendrá finalmente en su cuenta.",salto)
document.write(problema5,salto,salto)

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


//problema a resolver

var problema7 =document.write("7) Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.")
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
    document.write("en las", tiempo, "horas que durmio,gasto un total de=", calorias,"calorias",salto,salto);
    
} else {
    var tiempo = 3 
    var calorias = (actreposo*60)*tiempo;
    document.write("en las", tiempo , "horas que gasto en reposos,gasto un total de=", calorias,"calorias",salto,salto);
    
}

//problema a resolver

var problema8 =document.write("8) Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves).",salto)
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
    document.write("nombre del producto:",p1,salto,"clave:",clave1,salto,"total del producto con descuento:$",totalpro1,salto)

    
} else  {
    var preciodes=(preciori*desclave2)/100
    var totalpro2=(preciori-preciodes)
    document.write("nombre del producto:",p1,salto,"clave:",clave2,salto,"total del producto con descuento:$",totalpro2,salto)
 

}

//-----------------------ejercicios compuestos





