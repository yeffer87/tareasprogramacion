// Constantes del formato:
var salto = '<br>';

//problemas a resolver
var ciclos =('casos de ciclo');
document.write(ciclos,salto,salto);

var problema1 = ('La factorial de un número es la multiplicación del número que van del 1 a dicho número. Para expresar el factorial se suele utilizar la notación n!. Así la definición es la siguiente')
document.write(problema1,salto,salto);

var genero = prompt('escriba su genero','')
var msj ;

switch (genero) {
    case 'hombre':
        msj = 'tu eres de marte'
        break;
    case 'mujer':
        msj = 'tu eres de venus'
        break;    

    default:
        msj: 'no eres de este mundo'
        break;
}



//ejercicio 4

