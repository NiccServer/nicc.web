  // Inventario SIMULADO (solo demo frontend)
const inventario = [
  {
    escuela: "Colegio Alpha",
    nivel: "Primaria",
    grado: "1",
    sucursal: "Sucursal Centro",
    disponible: true
  },
  {
    escuela: "Colegio Alpha",
    nivel: "Primaria",
    grado: "1",
    sucursal: "Sucursal Norte",
    disponible: false
  },
  {
    escuela: "Instituto Beta",
    nivel: "Secundaria",
    grado: "2",
    sucursal: "Sucursal Centro",
    disponible: true
  }
];

const form = document.getElementById("consultaForm");
const resultadosDiv = document.getElementById("resultados");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const escuela = document.getElementById("escuela").value;
  const nivel = document.getElementById("nivel").value;
  const grado = document.getElementById("grado").value;

  // Limpiar resultados
  resultadosDiv.innerHTML = "";

  const resultados = inventario.filter(item =>
    item.escuela === escuela &&
    item.nivel === nivel &&
    item.grado === grado
  );

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "<p>No hay información para esa selección.</p>";
    return;
  }

  resultados.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <strong>${item.sucursal}</strong>
      Estado: ${item.disponible ? "Disponible" : "Agotado"}
    `;

    resultadosDiv.appendChild(card);
  });
});
