/*let _name = "Jhon";
let $admin = "Hola " + _name;
alert($admin)

let $admin;
let $name="Jhon";
$admin=$name
alert("Hola "+ $admin)

const pi=3.141516
const Red="#F00";

let $num1=14; // entero
let $num2=12.345; //punto flotante
alert($num1/0)

let $nom="texto normal";
let $nom2='Texto con comillas simples';
let frase= `Este texto esta unido con ${$nom2}`;
alert(frase);

let nameValor=true;
let nameValor2=false;
let isGreater= 4>1;
alert(isGreater)

//null
let age=null;
alert(age);

let name ="Sabina";
alert(`Hola ${1}`);
alert(`Hola ${"name"}`);
alert(`Hola ${name}`);
...............................................*/
//PROMPT
  //let edad=prompt("¿Cual es tu edad?");
  //alert(`Hola, usted tiene ${edad} años`)
//CONFIRM
  //let jefe=confirm("¿Eres tu el de jefe?")
  //alert(jefe);
 /* let edad2=Number(edad);
  let texto=String(edad2);
  let bool=Boolean(edad); */

  /* let num1=prompt("Ingrese numero1:")
  let num2=prompt("Ingrese un numero 2:")
   let suma= Number(num1)+Number(num2);
   let resta= num1-num2;
   alert(`La sumna es ${suma}`)
   alert(`La resta es ${resta}`) */
    //...............................................
    /* let num1=prompt("Ingrese numero1:")
   let num2=prompt("Ingrese un numero 2:")
    let multiplicar= num1*num2;
    let dividir= num1/num2;
    let residuo= num1%num2;
    let potencia= num1**num2;
    alert(`La multiplicacion es ${multiplicar}\nLa division es ${dividir}\nEl residuo es ${residuo}\nLa potencia es ${potencia}`)

    .............................................. */

    //cariable de incremento - decremento
    //let contador=0;
    //contador=contador+1; //Forma larga
    //alert(++contador);

    /*let num1=prompt("Ingrese numero1:")
    let num2=prompt("Ingrese un numero 2:")
    let suma= Number(num1)+Number(num2);
    document.getElementById("titulo").innerHTML="Resultado: " + suma;
    let n=2;
    n=n+5; n+=5
    n=n*2; n*=2/*
    
    /* let year = prompt("En que año fue el atentado de las torres gemelas")
    if (year==2001) {
    alert("Estas en lo correcto!!")
     alert("Eres inteligente")
    }else{
        alert("Te equivocaste")
    } */

     /*
    let numero = prompt("Ingrese un numero")
    if (numero>0) {
    alert("Es positivo!!")
    }
    else if(numero==0){
        alert("Es cero")
    }
    else{
        alert("Es negativo")
    }*/
    //OPERADOR TERNARIO: ?
        //let variable= condicion ? respuestaV : respuestaF ;
    /*let edad=prompt("Eres o no eres mayor de edad")
    let Mayordedad= (edad<=0)? "Edad Incorrecta" : (edad>18)? "Es mayor de edad" : "Es menor de edad" ;
    alert(Mayordedad)  */

    /*
    let numero = prompt('¿Cual es el nombre oficial de JavaScript?')
    if (numero=="EMAScript") {
    alert("Es correcto!!")
    }
    
    else{
        alert("¿No lo sabes? !EMAScript¡")
    }
    */

   /*
    let numero = prompt("Muestra el signo")
    if (numero>0) {
    alert("1")
    }
    else if(numero==0){
        alert("0")
    }
    else{
        alert("-1")
    }*/

    /*/Ingresa una nota de un alumno si está aprobado o desaprobado <=10 en proceso, <16 estas mejorando, <18 estas muy bien, <=20 excelente
    switch (variable){
        case 'valor de la variable':
           respuestas
        case 'valor de la variable':
           respuestas
           default:
    }*/
//Quita el String y convierte a Number

/* let nota= +prompt("Ingrese su nota");
    switch (nota){
        case 10:
            alert("reprobado");
            break;
        case 16:
            alert("estas mejorando");
            break;
        case 18:
            alert("esta muy bien");
            break;
        case 19:
        case 20:
            alert("excelente");
            break;
        default:
            alert("No es ninguna nota valida")
            break;
    }
*/
//BUCLES: WHILE (MIENTRAS)
/* let num=1;
while(num<=10){ 
    alert(num);
    ++num;
} */

//BUCLES: DO WHILE
/* let num=0;
do{
    console.log(num);
    ++num; //num=num+1;
}while(num>5); */

//FOR (INICIO; CONDICION; STEP)
/* for(let i=1; i<=8;i++){

    if(i==3 || i==5){
    continue;
}
console.log(i)} */

let num= +prompt("Inserte numero");
let c=1;
while(c<=num){ 
    console.log("numero:" + c );
    c++;
}
