<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Múltiple Choice</title>
</head>
<body>

<h2>Examen Múltiple Choice</h2>

<p>1. ¿Cuál es la capital de Argentina?</p>
<select id="p1">
  <option value="">Seleccione una respuesta</option>
  <option value="Londres">Londres</option>
  <option value="Buenos Aires">Buenos Aires</option>
  <option value="Roma">Roma</option>
</select>

<p>2. ¿Cuánto es 5 x 6?</p>
<select id="p2">
  <option value="">Seleccione una respuesta</option>
  <option value="30">30</option>
  <option value="25">25</option>
  <option value="35">35</option>
</select>

<p>3. ¿Cuál es el planeta más cercano al Sol?</p>
<select id="p3">
  <option value="">Seleccione una respuesta</option>
  <option value="Planeta Tierra">Planeta Tierra</option>
  <option value="Mercurio">Mercurio</option>
  <option value="Marte">Marte</option>
</select>

<p>4. ¿Quién escribió “Don Quijote de la Mancha”?</p>
<select id="p4">
  <option value="">Seleccione una respuesta</option>
  <option value="Miguel de Cervantes">Miguel de Cervantes</option>
  <option value="Jorge Luis Borges">Jorge Luis Borges</option>
  <option value="William Shakespeare">William Shakespeare</option>
</select>

<br><br>
<button onclick="corregir()">Ver resultados</button>

<p id="resultado"></p>

<script>
function corregir() {
  const respuestasCorrectas = ["Buenos Aires", "30", "Mercurio", "Miguel de Cervantes"];

  const respuestasUsuario = [
    document.getElementById("p1").value,
    document.getElementById("p2").value,
    document.getElementById("p3").value,
    document.getElementById("p4").value
  ];

  let correctas = 0;
  let incorrectas = 0;

  for (let i = 0; i < respuestasCorrectas.length; i++) {
    if (respuestasUsuario[i] === respuestasCorrectas[i]) {
      correctas++;
    } else {
      incorrectas++;
    }
  }

  document.getElementById("resultado").textContent = 
    "Respuestas correctas: " + correctas + " | Incorrectas: " + incorrectas;
}
</script>

</body>
</html>
