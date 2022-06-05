/*Calcular pagos en cuotas sobre un monto determinado.
*/

let amount;
let fee;
const interest = 0.2;

function input() {
  let validAmount = false;
  let validFee = false;

  do {
    amount = prompt("Ingrese el importe...");
    if (amount > 0) {
      validAmount = true;
    } else {
      alert("Ingrese un valor válido");
      validAmount = false;
    }
  } while(!amount || !validAmount);

  do {
    fee = prompt("Ingrese la cantidad de cuotas...");
    if (fee > 0) {
      validFee = true;
    } else {
      alert("Ingrese un valor válido");
      validFee = false;
    }
  } while(!fee || !validFee);

  if(fee <= 3 && fee >0) {
    calculate(amount, 0, fee);
  }
  if(fee > 3) {
    calculate(amount, interest, fee);
  }
}

function calculate(amount, interest, fee) {
    alert("El valor de la cuota mensual será de " + (amount * (1 + interest)) / fee);
}

input();