<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formulario</title>
  <script>
    function mostrarMensaje(boton) {
      alert("Se presionó el botón " + boton);
    }
  </script>
</head>
<body>
  <h2>Formulario</h2>
  <form>
    <button type="button" onclick="mostrarMensaje(1)">1</button>
    <button type="button" onclick="mostrarMensaje(2)">2</button>
    <button type="button" onclick="mostrarMensaje(3)">3</button>
  </form>
</body>
</html>
