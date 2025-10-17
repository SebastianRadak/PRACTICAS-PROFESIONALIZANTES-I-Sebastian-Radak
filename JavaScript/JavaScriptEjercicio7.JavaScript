<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Presupuesto</title>
</head>
<body>

  <h2>Presupuesto</h2>

  <label>Procesador:</label>
  <select id="procesador">
    <option value="400">Intel i3 - $400</option>
    <option value="600">Intel i5 - $600</option>
    <option value="800">Intel i7 - $800</option>
  </select>
  <br><br>

  <label>Monitor:</label>
  <select id="monitor">
    <option value="250">Samsung 20' - $250</option>
    <option value="350">Samsung 22' - $350</option>
    <option value="550">Samsung 26' - $550</option>
  </select>
  <br><br>

  <label>Disco Duro:</label>
  <select id="disco">
    <option value="300">500 Gb - $300</option>
    <option value="440">1 Tb - $440</option>
    <option value="500">3 Tb - $500</option>
  </select>
  <br><br>

  <button onclick="calcularPresupuesto()">Calcular</button>
  <br><br>

  <label>Total:</label>
  <input type="text" id="total" readonly>
  <br><br>

  <div id="resumen"></div>

  <script>
    function calcularPresupuesto() {

      let procesadorSelect = document.getElementById("procesador");
      let monitorSelect = document.getElementById("monitor");
      let discoSelect = document.getElementById("disco");

      let procesadorTexto = procesadorSelect.options[procesadorSelect.selectedIndex].text;
      let monitorTexto = monitorSelect.options[monitorSelect.selectedIndex].text;
      let discoTexto = discoSelect.options[discoSelect.selectedIndex].text;

      let procesador = parseFloat(procesadorSelect.value);
      let monitor = parseFloat(monitorSelect.value);
      let disco = parseFloat(discoSelect.value);

      let total = procesador + monitor + disco;
      document.getElementById("total").value = "$" + total;

      let resumen = "Resumen del presupuesto:<br>" +
                    "- " + procesadorTexto + "<br>" +
                    "- " + monitorTexto + "<br>" +
                    "- " + discoTexto + "<br><br>" +
                    "<strong>Total: $" + total + "</strong>";

      document.getElementById("resumen").innerHTML = resumen;
    }
  </script>
</body>
</html>
