let salir=false;

function sumar(num1,num2){
    return num1+num2;
}
function restar(num1,num2){
    return num1-num2;
}
function multiplicar(num1,num2){
    return num1*num2;
}
function modulo(num1,num2){
    return num1%num2;
}
function dividir(num1,num2){
    return num1-num2;
}

while(!salir){
    let num1=parseInt(prompt("Ingresa el primer numero"));
    let num2=parseInt(prompt("Ingresa el segundo numero"));

    let opcion=parseInt(prompt("Ingrese una opcion:"+
    "1:Sumar"+
    "2:Resatar"+
    "3:Multiplicar"+
    "4:Dividir"+
    "5:Modulo"+
    "6:Salir"));
    let resultado=0;
    
    switch (opcion){
        case 1:
            resultado=sumar(num1,num2);
            break;
            case 2:
                resultado= restar(num1,num2);
            break;
            case 3:
                resultado= multiplicar(num1,num2);
            break;
            case 4:
                if(num2==0){
                    alert("No se puede dividir entre cero");
                }else{
                    resultado=dividir(num1,num2);
                }
            break;
            case 5:
                resultado=modulo(num1,num2);
            break;
            case 6:
                salir=true;
            break;
            default:
                alert("Solo numeros entre 1 y 6")
    }
    if(opcion>=1 && opcion<=3 || opcion==5 ){
      alert("El resultado es: "+resultado);
    }else if(opcion==4 && num2==0){
        alert("Intente nuevamente gracias")
    } else if(opcion>=1 && opcion<=5 ){
        alert("El resultado es: "+resultado);
    }else{
        alert("Muchas gracias hasta pronto!!!");
    }


}

