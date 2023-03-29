let nombre = prompt("ingrese su nombre");
let gm = prompt("Ingrese su email");
let num = prompt("Ingrese su Numero de identificacion");
let validegm = gm.includes("@");
//no es correcta la validacion aca
let valide = num.includes(length=>5 && length<=10);
switch (true) {
    case (validegm&&valide):{
        console.log(nombre,", email y numero de identificacion válidos");
    }
        break;
        case(validegm==false):
        console.log(nombre,", email invalido");
        break;
        case (valide==false):
            console.log(nombre,"numero de identificacion invalido");

    default:
      //ojo que si por ejemplo falla arriba el email no se puede concluir que todos fallan
        console.log(nombre,", email y numero no válidosS");
        break;
}
nota: 1,8