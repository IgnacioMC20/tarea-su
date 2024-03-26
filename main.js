import { db } from './scripts/db/dbindex';
import './style.css'
import { hashPassword, unHashPassword } from './utils/hashPassword';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <body>
  <form>
  <h2>Iniciar sesión</h2>
  <label for="employee-id">ID de empleado</label>
  <input type="text" id="employee-id" name="employee-id">
<br/>
<label for="password">Contraseña</label>
<input type="password" id="password" name="password">
<br/>

<input type="submit" value="Iniciar sesión">
</form>
<br/>


<a href="/pages/crear-usuario.html">Crear Usuario</a>


</body>
`

const saveDB = () => {
  const users = db.usuarios.map((item) => {
    return {
      ...item,
      contrasena: hashPassword(item.contrasena)
    }
  })
  if (!localStorage.getItem('db')) {
    localStorage.setItem('db', JSON.stringify(
      {
        ...db,
        usuarios: users
      }
    ));
  }
}
saveDB();
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const employeeId = document.querySelector('#employee-id').value;
  const password = document.querySelector('#password').value;
  login({ employeeId, password });
});


const login = ({ employeeId, password }) => {
  console.log({ employeeId, password })
  const dbLocal = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};
  // console.log('hashPassword', hashPassword(password))
  // console.log('unHashPassword', unHashPassword(hashPassword(password)))

  const usuarioEncontrado = dbLocal.usuarios.find(usuario => {
    // console.log('usuario', usuario.nombre)
    console.log('contra', usuario.contrasena)
    console.log('contraHasg', unHashPassword(usuario.contrasena))
    return usuario.nombre === employeeId && unHashPassword(usuario.contrasena) === password
  });

  // Verificar si se encontró el usuario
  if (usuarioEncontrado) {
    window.location.href = '/pages/productos.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }

}