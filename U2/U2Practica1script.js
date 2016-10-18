//esta función debe devolver un array con los nombres de todo lo que vende el kiosko.
//No es necesario pasarle parámetros.
function generaSurtido () {
  var productos = ["Bolsa Caramelo", "Bolsa Gominola", "Coca-cola", "Fanta", "Chocolatina", "Agua", "Bolsa Papas"];
  return productos;
}

//esta función devuelve el precio de los artículos cuando le pasamos el índice del artículo que queremos consultar.
//Dentro de la función tendrás que definir un array con los precios de los artículos del apartado anterior.
function consultaPrecios (articulo) {
  var precio = [1,1,2.5,2,1,1.5,3];
  return precio[articulo];
}

//esta función debe mostrar por pantalla un listado con el surtido de todo lo que vende el kiosko junto a su precio correspondiente.
function mostrarSurtido() {
  var producto = generaSurtido();
  for (var i=0; i<producto.length; i++) {
    document.write ("<p>" + producto [i] + " " + consultaPrecios(i) + "€</p><br>");
  }
}
