/*
let usuario = "Carol";
switch(usuario){
case "dev", "estagiario":
 console.log("Bem-vindo, dev");
case 2:
 console.log("Bem-vindo, Carol");
default:
    console.log("Não é nenhum usuário registrado");
}
O problema desse código é que sem o comando "break" seão executados
todos os casos
*/

let usuario = "estagiario";
switch(usuario){

 case "dev", "estagiario":
 console.log("Bem-vindo, dev");
 break;

 case "Carol":
 console.log("Bem-vindo, Carol");
 break;

 default:
 console.log("Não é nenhum usuario registrado");
}