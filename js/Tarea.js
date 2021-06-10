let x1=0;
let x2=0;
alert("Que tal amigos soy Juarex113 y binvenidos a la Resolución de ecuaciones.\n Se te pedirá los valores de A, B y C de las ecuaciones");
let vA=prompt("Ingresa el valor para A");
let vB=prompt("Ingresa el valor para B");
let vC=prompt("Ingresa el valor para C");
document.getElementById("titulo").innerHTML=vA;
document.getElementById("titulo2").innerHTML=vB;
document.getElementById("titulo3").innerHTML=vC;
let discr= (vB**2)-(4*vA*vC);
if (discr>0){
    x1= (-vB + (discr**(1/2)))/(2*vA);
    x2= (-vB - (discr**(1/2)))/(2*vA);
}else if(discr==0){
    x1= (-vB + (discr**(1/2)))/(2*vA);
    x2=x1;
}
else{
    alert("No tiene solución la ecuación")
    x1=null;
    x2=x1;

}
document.getElementById("titulo4").innerHTML=x1;
document.getElementById("titulo5").innerHTML=x2;