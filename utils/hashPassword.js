// Función para convertir una contraseña en una cadena de códigos ASCII separados por puntos
export function hashPassword(contraseña) {
    const codigosASCII = [];
    for (let i = 0; i < contraseña.length; i++) {
      const codigo = contraseña.charCodeAt(i);
      codigosASCII.push(codigo);
    }
    return codigosASCII.join('.');
  }
  
  // Función para convertir una cadena de códigos ASCII separados por puntos en una contraseña
  export function unHashPassword(codigoASCII) {
    const codigos = codigoASCII.split('.');
    console.log(codigos)
    let contraseña = '';
    for (let i = 0; i < codigos.length; i++) {
      contraseña += String.fromCharCode(parseInt(codigos[i]));
    }
    console.log(contraseña)
    return contraseña;
  }
  
  