let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(id,nombre,precio){

carrito.push({
id:id,
nombre:nombre,
precio:precio
});

localStorage.setItem("carrito",JSON.stringify(carrito));

alert("Producto agregado al carrito");

}

function cargarCarrito(){

let contenedor = document.getElementById("carrito");
let total = 0;

contenedor.innerHTML="";

carrito.forEach(p=>{

contenedor.innerHTML += `
<div>
${p.nombre} - $${p.precio}
</div>
`;

total += p.precio;

});

document.getElementById("total").innerText = total;

}

function pagar(){

alert("Simulación de pago.\nAquí luego se conecta Mercado Pago.");

}
