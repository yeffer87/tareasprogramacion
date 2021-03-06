var salto = '<br>';


//convertir segundos -segundos-horas


var problema1 =("convertir segundos-segundos minutos-minutos-horas")
document.write(problema1,salto,salto)

//variables

 var numero = 9500
 var min ;
 var hor ;
 var segu ;
 
 //operaciones
hor = (numero/3600)
hor = Math.floor(hor)
min = numero/60
min = (min%60)
min = Math.floor(min)
segu = (numero -(hor*3600)-(min*60))
segu = Math.floor(segu)

 //solucion

document.write("el numero de horas es:",hor,salto,"el numero de minutos:",min,salto,"el numero de segundos es:",segu,salto,salto)

//problema a resolver

var problema2 =("porcentaje de unidad");
document.write(problema2,salto,salto);

//variables

 var numero =15.789
 var numero2 = 3.568
 
 //constabtes

 const porcentaje = 23

 //operaciones
valpor= (numero/100)*porcentaje
 porc2 = (3.568*100)/15.789
 porc2 =Math.floor(porc2)

 document.write("valor inicial:", numero,salto,"el porcentaje de los 3.568 es:",porc2,"%",salto,"el valor de el 23% es =",valpor,salto,salto);






 