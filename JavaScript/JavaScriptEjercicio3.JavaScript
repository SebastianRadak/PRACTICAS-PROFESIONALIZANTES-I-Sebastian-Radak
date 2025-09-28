<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Ejercicio 3</title>
</head>
<body>
  <h2>Mayor de dos números</h2>
  
  <label>Número 1: </label>
  <input type="text" id="num1"><br><br>
  
  <label>Número 2: </label>
  <input type="text" id="num2"><br><br>
  
  <button onclick="mostrarMayor()">Mostrar el mayor</button>
  
  <p id="resultado"></p>
  
  <script>
    function mostrarMayor() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);

      if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa números válidos.";
        return;
      }

      if (n1 > n2) {
        document.getElementById("resultado").innerText = "El mayor es: " + n1;
      } else if (n2 > n1) {
        document.getElementById("resultado").innerText = "El mayor es: " + n2;
      } else {
        document.getElementById("resultado").innerText = "Son iguales.";
      }
    }
  </script>
</body>
</html>
