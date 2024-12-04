document.getElementById('idiomas-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('idiomasContent');
  $('#current-page').text("Idiomas");
  contentContainer.innerHTML = "";

  fetch('pages/idiomas.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      addLanguage();
    })
    .catch(error => console.error('Error cargando idiomas.html:', error));
});

function addLanguage() {
  const addRowBtn = document.getElementById('add-language-column-btn');
  if (addRowBtn) {
    addRowBtn.addEventListener('click', function () {
      const tableBody = document.querySelector("#language-table tbody");
      
      // Create a new row
      const newRow = document.createElement("tr");

      // Add cells to the new row
      newRow.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Puntaje"></td>
        <td><input type="text" class="form-control" placeholder="Nivel"></td>
        <td><input type="text" class="form-control" placeholder="Nombre de la prueba"></td>
        <td><input type="text" class="form-control" placeholder="Fecha de presentación"></td>
        <td>
          <div class="d-flex flex-row justify-content-around">
            <i class="bi bi-pencil-square text-primary p-2 pointer"></i>
            <i class="bi bi-trash text-danger p-2 pointer"></i>
          </div>
        </td>
      `;

      // Append the new row to the table body
      tableBody.appendChild(newRow);
    });
  }
}