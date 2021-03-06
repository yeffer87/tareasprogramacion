//constantes formato
var salto = '<br>';

var coordinacion =("problemas coordinacion")
document.write(coordinacion,salto,salto);

//problema a resolver

var problema1 =("1. El centro de vacunación Laureles coloca vacunas a los bebes menores de un año y ladosis a aplicar depende del peso y la edad del bebé según la siguiente fórmula:");
document.write(problema1,salto,salto);

//variables
var peso = 6
var meses = 2

//constantes

const diez = 10
const ocho = 8

//operaciones

var dosis = ((peso+diez) / (diez*meses) + ocho)

//solucion
document.write("peso del bebe",peso,salto,"numero meses del bebe",meses,salto,"las dosis que se deben aplicar al chiquillo son=",dosis,salto,salto);

//problema a resolver

var problema2 =("2. Un empleado trabaja 48 horas en la semana a razón de $15.000 hora. El porcentaje de retención en la fuente es del 12, 5% del salario bruto. Se desea saber cuál es el salariobruto, la retención en la fuente y el salario neto del trabajador");
document.write(problema2,salto,salto);

//variables

var valorho = 15000
var horastra = 48
var retencion ;
var salabruto ;
var salaneto ;

//constantes

const porcenrete = 12.5

//operaciones

var salabruto = (horastra*valorho)
var retencion = ((salabruto/100)*porcenrete);
var salaneto = (salabruto-retencion)

//solucion
document.write("su salario bruto:$",salabruto,salto,"retencion de:$",retencion,salto,"su total de salario es de:$",salaneto,salto,salto);

//problema a resolver 
var problema3 =("3. EPM requiere de la lectura anterior en kilovatios y la lectura actual en kilovatios de unmedidor de luz para determinar el consumo de electricidad de una vivienda. Teniendo como datos de entrada la lectura inicial y la lectura final en kilovatios de un medidor, determine el consumo de los kilovatios y el monto a pagar por dicho consumo sabiendo que cada kilovatio tiene un valor de 15.000 pesos. Adicionalmente cobran el 10% del monto del consumo por concepto de aseo urbano, determine el monto total a pagar.");
document.write(problema3,salto,salto);

//variables

var lecturaan = 529.7
var lecturaac = 1024.6

//constantes

const kilovatio = 15000
const porcenaseo = 10
const centima = 100

//operaciones

var consumo = lecturaac - lecturaan 
var consumo = Math.floor(consumo)
var valconsumo = consumo * kilovatio
var totalpago = (valconsumo + ((valconsumo/centima)*porcenaseo))

//solucion
document.write("usted consumio un total de energia de=",consumo,"kv",salto,"el total a pagar que tiene que pagar es:$",totalpago,salto,salto)

var Consultor =("Problemas Consultor")
document.write(Consultor,salto,salto);

//problema a resolver
var problema1 =("1.En la asignatura tecnología se realizaron 5 evaluaciones. Las evaluaciones tienen una calificación del 1 a 5. La primera evaluación tiene un peso del 15%, la segunda tiene un peso del 30%, la tercera tiene un peso de 25%, la cuarta tiene un peso de 10% y la última tiene un peso del 20%. Realice un algoritmo que determine la calificación final")
document.write(problema1,salto,salto)

//variables

var n1 = 5
var n2 = 2
var n3 = 3
var n4 = 4
var n5 = 4

//constantes

const vn1 = 15
const vn2 = 30
const vn3 = 25
const vn4 = 10
const vn5 = 20

//operaciones

var promedio = ((n1*vn1) + (n2*vn2)+(n3*vn3)+(n4*vn4)+(n5*vn5)) /100

//solucion
document.write("primer nota:",n1,salto,"segunda nota:",n2,salto,"tercera nota:",n3,salto,"cuarta nota:",n4,salto,"quinta nota:",n5,salto,"querido estudiante,su promedio total en todas las notas es de:",promedio,salto,salto);

//problema a resolver
var problema2 = ("2. Una empresa le hace los siguientes descuentos sobre el sueldo base a sus trabajadores: 1% por ley de política habitacional, 4% por Seguro Social, 0,5% por seguro paro forzoso y 5% por caja de ahorro. Realice un algoritmo que determine el monto de cada descuento y el monto total a pagar al trabajador.");
document.write(problema2,salto,salto);

//variables

var suelb =300000

//constantes

const politica = 1
const segusoc = 4
const seguparo = 0.5
const cajaahorro = 5

//operaciones
//monto cada descuento

var mp = (suelb*politica)/100
var mssoc = (suelb*segusoc)/100
var mspar = (suelb*seguparo)/100
var mcaja = (suelb*cajaahorro)/100
var montototal = (mp+mssoc+mspar+mcaja+suelb)

//solucion
document.write("su sueldo base:$",suelb,salto,"monto por politica:$",mp,salto,"monto por seguro social:$",mssoc,salto,"monto por seguro paro forzado:$",mspar,salto,"monto por caja ahorro:$",cajaahorro,salto,"el monto total que se pagara es de:$",montototal,salto,salto);

//problema a resolver
var problema3 =("3. Campos de Paz vende parcelas a crédito, donde el cliente da una inicial y el resto lo paga en 24 cuotas, pero con un incremento del 20% sobre lo que quedó debiendo. Teniendo como dato de entrada el precio de la parcela determine el monto de cada cuota y el precio final de la parcela.")
document.write(problema3,salto,salto)

//variables

var inicien = 60000
var valparcel = 500000
var valorcuota ;
var montocuo ;
var preciofi ;

//constantes

const debecuo = 20
const cuotas = 24

//operaciones

var valorcuota = (valparcel-inicien) / cuotas
var montocuo = (valorcuota*debecuo)/100
var montocuo = Math.floor(montocuo)
var preciofi = inicien + ((valorcuota+montocuo) * cuotas)

//solucion
document.write("el monto de cada cuota de la parcela sera de:$",montocuo,salto,"en base a esto el precio final de la parcela queda en:$",preciofi,salto,salto)


var secretario=("Secretario")
document.write(secretario,salto,salto)

//problema a resolver 

var problema1 =("1. Diseñar el algoritmo correspondiente a un programa que calcule el área y el perímetro de un triángulo rectángulo dada la base y la altura")
document.write(problema1,salto,salto);

//variables

var base = 6
var altura = 4
var perimetro ;
var area ;

//operaciones

var area = (base*altura) / 2
var perimetro = (base+altura+area)

//solucion
document.write("el area del triangulo rectangulo es de:",area,salto,"el perimetro de el triangulo rectangulo es de:",perimetro,salto,salto);

//problema a resolver

var problema2 =("2. Un banco paga a sus ahorrista un interés del 1.5% sobre el monto ahorrado. Teniendo como dato de entrada el saldo inicial del ahorrista determine el saldo final.")
document.write(problema2,salto,salto)

//variables

var saldoini = 20000
var saldofi ;

//constantes

const interes = 1.5

//operaciones

var sumaint = (saldoini*interes)/100
var saldofi = saldoini + sumaint

//solucion
document.write("saldo inicial en cuenta:$",saldoini,salto,"al pasar el tiempo el saldo final de su cuenta esta en:$",saldofi,salto,salto)

//problema a resolver

var problema3 =("3. Calcular el volumen de un cono")
document.write(problema3,salto,salto)

//variables

var radio = 6
var altura = 12
var volumen ;

//constante 

const pi = 3.14

//operaciones

var volumen = 1/3*pi*(radio*radio)*altura
var volumen = Math.floor(volumen)

//solucion
document.write("radio:",radio,salto,"altura:",altura,salto,"el volumen del cono es de:",volumen,salto,salto);

var tesorero = ("tesorero")
document.write(tesorero,salto,salto)


var problema1 =("1. Una empresa paga a sus empleados además del sueldo base una bonificación especial de 10 %. por cada hijo. Realice un algoritmo que determine el monto de la bonificación y el monto total a pagar al trabajador.")
document.write(problema1,salto,salto)

//variables

var numHij = 5
var salariobas = 90000
var montobon ;

//constantes

const bonifi = 10

//operaciones

var montobon = ((salariobas*10)/100)*5
var totalpagar = montobon+salariobas

//solucion

document.write("monto de bonificacion:$",montobon,salto,"total a pagar al trabajador:$",totalpagar,salto,salto)

//problema a resolver

var problema2 =("2. Una institución educativa le paga a sus profesores $20.000 por hora y le hace un descuento del 5% por concepto de caja ahorro. Determine el monto del descuento y el monto total a pagar al profesor.")
document.write(problema2,salto,salto)

//variables

var horas = 3
var pagofin ;
var montodes ;

//constante

const salarb = 20000
const descuen = 5

//operaciones

var salarhor = salarb*horas
var montodes = (salarhor*descuen)/100
var totalpagar = salarhor-montodes

//solucion
document.write("descuento por caja de ahorros:$",montodes,salto,"pago total al trabajador:$",totalpagar,salto,salto)

//problema a resolver

var problema3 = ("3. Una inmobiliaria vende terrenos a $ 550.000 por el metro cuadrado. El cliente debe dar una inicial y el resto lo paga en 12 cuotas. Determine el monto de cada cuota.")
document.write(problema3,salto,salto)

//variables

var pagini = 216000
var montocuo ;

//constantes

const cuotass = 12
const valterre = 550000

//operaciones

var restacuo = valterre-pagini
var montocuo = (restacuo) / (cuotass)
var montocuo = Math.floor(montocuo) 

//solucion

document.write("valor terreno:$",valterre,salto,"pago inicial:$",pagini,salto,"queda debiendo:$",restacuo,salto,"tipo de cuota:",cuotass,salto,"monto de cada cuota:$",montocuo,salto)








