<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Problema 5</title>
</head>
<body>

  <h2>Verificar Contraseña</h2>
  <input type="password" id="clave1" placeholder="Ingrese su contraseña">
  <input type="password" id="clave2" placeholder="Repita su contraseña">
  <button onclick="verificar()">Verificar</button>
  <p id="resultado"></p>

  <script>
    function verificar() {
      let clave1 = document.getElementById("clave1").value;
      let clave2 = document.getElementById("clave2").value;
      let resultado = document.getElementById("resultado");

      if (clave1 === "" || clave2 === "") {
        resultado.textContent = "Por favor, complete ambos campos.";
      } else if (clave1 === clave2) {
        resultado.textContent = "Contraseña correcta.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "Las contraseñas no coinciden.";
        resultado.style.color = "red";
      }
    }
  </script>
</body>
</html>
