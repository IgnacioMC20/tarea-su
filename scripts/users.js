import '../style.css'
document.querySelector('#app').innerHTML = `

<body>
  <h2>Lista de Usuarios</h2>

  <table>
    <thead>
      <tr>
        <th>Id del empleado</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</body>

`

const hydrateUsers = () => {
    const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};
    const table = document.querySelector('tbody');
    const users = dbLocal.usuarios;
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.nombre}</td>
        <td>Activo</td>
        `;
        table.appendChild(row);
    });
}

hydrateUsers();