document.getElementById('identificacion-tab').addEventListener('click', function () {
  loadIdentification();
});

window.onload = () => {
  loadIdentification();
};

function loadIdentification() {
  const contentContainer = document.getElementById('identificacionContent');
  $('#current-page').text("Identificación");
  contentContainer.innerHTML = "";

  fetch('pages/identificacion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      loadIdentificationInfo();
    })
    .catch(error => console.error('Error cargando identificacion.html:', error));
}

function loadIdentificationInfo() {
  const formValues = {
    "input-identification-1": "opcion2",
    "input-identification-2": "femenino",
    "input-identification-3": "colombia",
    "input-identification-4": "casado",
    "input-identification-5": "1990-05-15",
    "input-identification-6": "pasaporte",
    "input-identification-7": "123456789",
    "input-identification-8": "mexico",
    "input-identification-9": "Avenida Siempre Viva 742",
    "input-identification-10": "ciudad_mexico",
    "input-identification-11": "(555) 123-4567",
    "input-identification-12": "https://linkedin.com/in/usuario",
    "input-identification-13": "si",
    "input-identification-14": "2",
    "input-identification-15": "3"
  };

  for (const fieldId in formValues) {
    const field = document.getElementById(fieldId);
    if (!field) continue;

    const value = formValues[fieldId];
    if (field.tagName === "SELECT") {
      field.value = value;
      field.disabled = true;
    }
  
    else if (field.tagName === "INPUT") {
      if (field.type === "date") {
        field.value = value;
      } else {
        field.value = value;
      }
      field.disabled = true;
    }
  }
}