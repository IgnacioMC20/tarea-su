import '../style.css'
import { hashPassword, unHashPassword } from '../utils/hashPassword';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <body>
  <form>
  <h2>Crear Usuario</h2>
  <label for="employee-id">ID de empleado</label>
  <input type="text" id="employee-id" required name="employee-id">
  <br>

  <label for="password">Contraseña</label>
  <input type="password" required id="password" name="password">
  <br>

  <input type="submit" value="Crear Usuario">
</form>
<br>
<a href="/">Ya tienes usuario?</a>


</body>
`

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const employeeId = document.querySelector('#employee-id').value;
    const password = document.querySelector('#password').value;
    singin({ employeeId, password });
});


const singin = ({ employeeId, password }) => {
    console.log({ employeeId, password })
    const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};

    const usuarioEncontrado = dbLocal.usuarios.find(usuario => {
        return usuario.nombre === employeeId && unHashPassword(usuario.contrasena) === password
    });

    if (usuarioEncontrado) {
        alert('Usuario ya existe')
    }

    dbLocal.usuarios.push({
        nombre: employeeId,
        contrasena: hashPassword(password)
    });

    window.location.href = '/pages/productos.html';
}