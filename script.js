// Repite hasta que el usuario escriba SALIR o cierre el prompt
while (true) {
  // 1) Pedir departamento
  var dep = prompt("Ingresa el DEPARTAMENTO (HUEHUETENANGO, QUETZALTENANGO, GUATEMALA) o escribe SALIR:");
  if (dep === null) { // Si cancela el prompt
    alert("Fin del proceso.");
    break;
  }

  dep = dep.trim().toUpperCase();

  if (dep === "SALIR") {
    alert("Fin del proceso.");
    break;
  }

  // Validar departamento (de los 3)
  if (dep !== "HUEHUETENANGO" && dep !== "QUETZALTENANGO" && dep !== "GUATEMALA") {
    alert("Departamento inválido. Debes escribir exactamente: HUEHUETENANGO, QUETZALTENANGO o GUATEMALA.");
    continue; // Volver a pedir departamento
  }

  // 2) Pedir edad
  let edadTexto = prompt("Ingresa la EDAD (número entero):");
  if (edadTexto === null) {
    // Si cancela aquí, regresamos a pedir departamento
    continue;
  }

  var edad = parseInt(edadTexto, 10);

  if (isNaN(edad) || edad < 0) {
    alert("Edad inválida. Ingresa un número entero mayor o igual a 0.");
    continue; // Volver a pedir departamento
  }

  // 3) Decidir si puede votar
  if (edad >= 18) {
    alert(dep + ": edad " + edad + " → ✅ Puede votar");
  } else {
    alert(dep + ": edad " + edad + " → ❌ No puede votar");
  }

  // (Opcional) Mostrar también en la página si existe un <div id="resultado">
  var panel = document.getElementById("resultado");
  if (panel) {
    var p = document.createElement("p");
    if (edad >= 18) {
      p.textContent = dep + ": edad " + edad + " → Puede votar";
    } else {
      p.textContent = dep + ": edad " + edad + " → No puede votar";
    }
    panel.appendChild(p);
  }
}