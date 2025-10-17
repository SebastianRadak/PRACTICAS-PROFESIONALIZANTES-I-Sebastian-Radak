<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Validar Clave</title>
  <script>
    function validarClave() {
      let clave = document.getElementById("clave").value;
      if (clave.length < 7 || clave.length > 20) {
        alert("La clave debe tener entre 7 y 20 caracteres.");
      }
    }
  </script>
</head>
<body>
  <h2>Ingreso de usuario</h2>
  <form>
    <label>Nombre:</label>
    <input type="text" id="nombre"><br><br>

    <label>Clave:</label>
    <input type="password" id="clave" onblur="validarClave()"><br><br>
    <input type="submit" value="Ingresar">
  </form>
</body>
</html>
