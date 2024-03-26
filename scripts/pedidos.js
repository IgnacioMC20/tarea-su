import '../style.css'
document.querySelector('#app').innerHTML = `

<body>
  <h2>Lista de pedidos</h2>

  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>ID Producto</th>
        <th>Usuario que ordeno</th>
        <th>Proveedor</th>
        <th>Cantidad</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</body>

`

const hydratePedidos = () => {
    const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};
    const table = document.querySelector('tbody');
    const pedidos = dbLocal.pedidos;
    pedidos.forEach((pedido) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>00${pedido.id_pedido}</td>
        <td>${pedido.id_producto}</td>
        <td>${pedido.id_usuario}</td>
        <td>${pedido.proveedor}</td>
        <td>${pedido.cantidad}</td>
        <td>
            <button>Editar</button>
            <button>Solicitar pedido</button>
        </td>
        `;
        table.appendChild(row);
    });
}

hydratePedidos();