// Contadores por departamento
var cHue = 0, cQue = 0, cGua = 0;
// Mayores y menores
var mayHue = 0, mayQue = 0, mayGua = 0;
var menHue = 0, menQue = 0, menGua = 0;
// Sumas de edades (para promedios)
var sumHue = 0, sumQue = 0, sumGua = 0;

while (true) {
  var dep = prompt("Ingresa el DEPARTAMENTO (HUEHUETENANGO, QUETZALTENANGO, GUATEMALA) o escribe SALIR:");
  if (dep === null) {
    alert("Fin del proceso.");
    break;
  }

  dep = dep.trim().toUpperCase();

  if (dep === "SALIR") {
    alert("Fin del proceso.");
    break;
  }

  if (dep !== "HUEHUETENANGO" && dep !== "QUETZALTENANGO" && dep !== "GUATEMALA") {
    alert("Departamento inválido. Debes escribir exactamente: HUEHUETENANGO, QUETZALTENANGO o GUATEMALA.");
    continue;
  }

  var edadTxt = prompt("Ingresa la EDAD (número entero):");
  if (edadTxt === null) {
    // cancelar edad → vuelve a pedir departamento
    continue;
  }
  var edad = parseInt(edadTxt, 10);
  if (isNaN(edad) || edad < 0) {
    alert("Edad inválida. Ingresa un número entero mayor o igual a 0.");
    continue;
  }

  // Mensaje inmediato de si puede votar
  if (edad >= 18) {
    alert(dep + ": edad " + edad + " → ✅ Puede votar");
  } else {
    alert(dep + ": edad " + edad + " → ❌ No puede votar");
  }

  // Actualizar contadores según departamento
  if (dep === "HUEHUETENANGO") {
    cHue += 1;
    sumHue += edad;
    if (edad >= 18) { mayHue += 1; } else { menHue += 1; }
  } else if (dep === "QUETZALTENANGO") {
    cQue += 1;
    sumQue += edad;
    if (edad >= 18) { mayQue += 1; } else { menQue += 1; }
  } else if (dep === "GUATEMALA") {
    cGua += 1;
    sumGua += edad;
    if (edad >= 18) { mayGua += 1; } else { menGua += 1; }
  }
}

// Función para promedio seguro
function promedio(sum, count) {
  if (count > 0) {
    return (sum / count).toFixed(2);
  }
  return "0.00";
}

// Cálculos finales
var promHue = promedio(sumHue, cHue);
var promQue = promedio(sumQue, cQue);
var promGua = promedio(sumGua, cGua);

var totalPersonas = cHue + cQue + cGua;
var totalSumaEdades = sumHue + sumQue + sumGua;
var promGeneral = promedio(totalSumaEdades, totalPersonas);

// Pintar resultados en el index (div#resultado)
var panel = document.getElementById("resultado");
if (panel) {
  var html = "";
  html += "<h2>Resultados</h2>";
  html += "<ol>";
  html += "<li>Cuántos ciudadanos pertenecen a Huehuetenango: " + cHue + "</li>";
  html += "<li>Cuántos ciudadanos pertenecen a Quetzaltenango: " + cQue + "</li>";
  html += "<li>Cuántos ciudadanos pertenecen a Guatemala: " + cGua + "</li>";
  html += "<li>Cuántos ciudadanos de Huehuetenango son mayores de edad: " + mayHue + "</li>";
  html += "<li>Cuántos ciudadanos de Quetzaltenango son mayores de edad: " + mayQue + "</li>";
  html += "<li>Cuántos ciudadanos de Guatemala son mayores de edad: " + mayGua + "</li>";
  html += "<li>Cuántos ciudadanos de Huehuetenango son menores de edad: " + menHue + "</li>";
  html += "<li>Cuántos ciudadanos de Quetzaltenango son menores de edad: " + menQue + "</li>";
  html += "<li>Cuántos ciudadanos de Guatemala son menores de edad: " + menGua + "</li>";
  html += "<li>Promedio de edades de Huehuetenango: " + promHue + "</li>";
  html += "<li>Promedio de edades de Quetzaltenango: " + promQue + "</li>";
  html += "<li>Promedio de edades de Guatemala: " + promGua + "</li>";
  html += "<li>Promedio general de los tres departamentos: " + promGeneral + "</li>";
  html += "</ol>";
  panel.innerHTML = html;
}