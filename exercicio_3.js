// Tabela verdade

/*
Comparativos

E/AND
- Ambos os comparativos precisam ser VERDADEIROS!
- Em JS: & | &&
OU/OR
- Segue as regras do AND, porém, aceita somente um verdadeiro; falso
apenas quando forem F/F
- Em JS: |, ||
XOU/XOR
- Somente um dos comparativos VERDADEIRO
- Em JS: ^
CONTRÁRIO
- Verdadeiro quando o comparativo for falso
- Em JS: !=
*/
let idade = 18;
let sexo = "f";
 if(idade >= 18 && sexo == "m"){
   console.log("Lascou-se, vai ter que se alistar!");
}else {
    if(sexo = "f" && idade >= 18){
        console.log("Alistamento opcional");
    }else {
        console.log("Não pode se alistar");
    }
}







