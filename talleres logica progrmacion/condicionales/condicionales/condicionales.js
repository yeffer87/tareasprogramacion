
var salariosemanal ;
var horastraba = 45
const horasnorm = 40
var horasext = 5 
const horas = 16;
const cuarenmas = 20
var operacion1 = (horas*horasnorm) + (cuarenmas*horasext)
var operacion2 = (horas*horasnorm)

if (horastraba > horasnorm) {
    document.write("tu salario semanal es de=",operacion1,salto)

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