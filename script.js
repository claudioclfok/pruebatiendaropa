let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(id, nombre, precio) {
  carrito.push({ id, nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

function cargarCarrito() {
  let contenedor = document.getElementById("carrito");
  let total = 0;
  contenedor.innerHTML = "";

  carrito.forEach((p, index) => {
    contenedor.innerHTML += `
      <div>
        ${p.nombre} - $${p.precio} 
        <button onclick="eliminarProducto(${index})" style="color:red; cursor:pointer; border:none; background:none;">X</button>
      </div>
    `;
    total += p.precio;
  });

  document.getElementById("total").innerText = total;
}

function eliminarProducto(index) {
  carrito.splice(index, 1); // elimina el producto seleccionado
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito(); // recarga el carrito actualizado
}

function pagar() {
  alert("Simulación de pago.\nAquí luego se conecta Mercado Pago.");
}
