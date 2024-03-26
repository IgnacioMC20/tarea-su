
import '../style.css'
document.querySelector('#app').innerHTML = `

<body>
  <h2>Lista de productos</h2>

  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Categoría</th>
        <th>Existencia</th>
        <th>Acciones</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <script>
  
  </script>
</body>

`

const hydrateOrders = () => {
    const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};
    const table = document.querySelector('tbody');
    const products = dbLocal.productos;
    products.forEach((product, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>00${product.id_producto}</td>
        <td>${product.nombre}</td>
        <td>${product.descripcion}</td>
        <td>${product.categoria}</td>
        <td>${product.existencia}</td>
        <td>
          <button id="decrementar${i}" onclick=decrementarCantidad(${i})>-</button>
          <span id="cantidad${i}">0</span>
          <button id="incrementar${i}" onclick=incrementarCantidad(${i})>+</button>
      </td>
      <td>
        <button>Agregar al carrito</button>
        <button>Eliminar</button>
      </td>
        `;
        table.appendChild(row);
    });
}

hydrateOrders();

function incrementarCantidad(i) {
    const cantidadSpan = document.getElementById(`cantidad${i}`);
    let cantidad = parseInt(cantidadSpan.textContent) || 0;
    cantidad++;
    cantidadSpan.textContent = cantidad;
    console.log('Botón incrementar' + i + ' clickeado');
}

function decrementarCantidad(i) {
    const cantidadSpan = document.getElementById(`cantidad${i}`);
    let cantidad = parseInt(cantidadSpan.textContent) || 0;
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.textContent = cantidad;
        console.log('Botón decrementar' + i + ' clickeado');
    }
}
