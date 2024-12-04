document.getElementById('complementaria-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('complementariaContent');
  $('#current-page').text("Complementaria");
  contentContainer.innerHTML = "";

  fetch('pages/complementaria.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      addComplementary();
    })
    .catch(error => console.error('Error cargando complementaria.html:', error));
});

function addComplementary() {
  const addRowBtn = document.getElementById('add-complementary-column-btn');
  if (addRowBtn) {
    addRowBtn.addEventListener('click', function () {
      const tableBody = document.querySelector("#complementary-table tbody");
      
      // Create a new row
      const newRow = document.createElement("tr");

      // Add cells to the new row
      newRow.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Nombre del curso"></td>
        <td><input type="text" class="form-control" placeholder="Institución"></td>
        <td><input type="date" class="form-control"></td>
        <td><input type="number" class="form-control" placeholder="Duración (horas)" min="1"></td>
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