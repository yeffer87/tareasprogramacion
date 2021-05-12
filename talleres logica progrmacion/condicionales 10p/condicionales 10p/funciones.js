// Teniendo como dato de entrada el sueldo base y los años de servicio de un trabajador,
// realice un algoritmo que determine el monto del bono vacacional, bono fin de año y fideicomiso.
// Las vacaciones corresponden a 7 días de sueldo mas un día por cada año de servicio el bono fin de año corresponde a 45 días de sueldo,
// y el fideicomiso corresponde al 12% del sueldo 

//datos entrada
var suelba = 200000;
var añosser = 6;
const limitvaca = 7;
var diatrab ;
var montov ;
var bonofin ;
var monfideico ;

if (añosser >= limitvaca ) {
    montov = (limitvaca * suelba/100)*añosser
    document.write("su monto de vacaciones es=", montov);
} else {
    montov = vacacion * suelba
}

if (diasuel = 45) {
    bonofin = (suelba * 45)/360
    document.write("su bono de fin de año es de=",bonofin);
} else {
    bonofin = suelba * diatrab
}

