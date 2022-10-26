
document.getElementById("cuotas").addEventListener("change", function() {
  var e = document.getElementById("cuotas");
  var value = e.value;
  totalPago(value);
});

if(sessionStorage.getItem('carrito')) {
  var carrito = JSON.parse(sessionStorage.getItem('carrito'));
  items = carrito.length;
  var precio = 0;
  var nombreProducto = "";
  var totalCarrito = 0;
  var tablacarrito ="";
  for (var i = 0; i < items; i++){
      var x = JSON.parse(carrito[i]);
      precio = parseFloat(x.precio.split('$')[1]);
      nombreProducto = x.nombreProducto;
      tablacarrito += "<tr><td>" + nombreProducto + "</td><td>$" + precio.toFixed(2) + "</td></tr>";
      totalCarrito += precio;
  }
  document.getElementById("tabla").innerHTML = tablacarrito;
  document.getElementById("total").innerHTML = totalCarrito.toFixed(2);
}



function getAhora12(cantCuotas, monto) {
  let total = 0;
  switch (cantCuotas) {
    case '0':
    total =  monto - (monto * 0.10);
      break;
    case '6':
    total = ((monto * 30 / 100) + Number(monto)) / 6;
      break;
    case '12':
    total = ((monto * 55 / 100) + Number(monto)) / 12;
      break;

    default:
      break;
  }
  return total;
}


function totalPago(tipo) {

  let total = getAhora12(tipo, totalCarrito);
  let mensaje;
  if (tipo ==  0) {
    mensaje = "$ " + total
  } else if (tipo > 0 ) {
    mensaje = tipo + " cuotas de $" + total.toFixed(2);
  } else {
    mensaje ="";
  }

  document.getElementById("totalPago").innerHTML = mensaje;

}










