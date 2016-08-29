var calc = parseInt(prompt("Escoja una opcion: \n" +
	"1. Suma \n "+
	"2. Resta \n "+
	"3. Multiplicacion \n "+
	"4. Division \n "+
	"5. Mayor que \n "+
	"6. Menor que \n"+
	"7. Resto-Modulo \n "));

var num1 = parseInt(prompt("Ingresa el primer número"));
var num2 = parseInt(prompt("Ingresa el segundo número"));

switch(calc){
	case 1:
		var suma = num1 + num2;
		document.write("La suma es:"+ suma);
		break;
	case 2:
		var resta = num1 - num2;
		document.write("La resta es:" + resta);
		break;
	case 3:
		var multiplicacion = num1 * num2;
		document.write("La multiplicacion es:" + multiplicacion);
		break;
	case 4:
		var division = num1 / num2;
		document.write("La division es:" + division);
		break;
	case 5:
		var mayor = Math.max(num1, num2);
		document.write("El mayor es:" + mayor);
		break;
	case 6:
		var menor = Math.min(num1, num2);
		document.write("La menor es:" + menor);
		break;
	case 7:
		var residuo = (num1/100)*num2;
		document.write("El residuo es:" + residuo);
		break;
		
	default:
		window.alert("error");
		break;
	
}