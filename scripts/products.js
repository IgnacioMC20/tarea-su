
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
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</body>

`

const hydrateProducts = () => {
  const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};
    const table = document.querySelector('tbody');
    const products = dbLocal.productos;
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>00${product.id_producto}</td>
        <td>${product.nombre}</td>
        <td>${product.descripcion}</td>
        <td>${product.categoria}</td>
        <td>${product.existencia}</td>
        <td>
            <button>Editar</button>
            <button>Solicitar pedido</button>
        </td>
        `;
        table.appendChild(row);
    });
}

hydrateProducts();