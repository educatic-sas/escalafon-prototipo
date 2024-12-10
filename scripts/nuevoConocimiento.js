import { newKnowledgeObject, quillDefaultValue } from '../utils/utils.js';

document.getElementById('nuevo-conocimiento-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('nuevoConocimientoContent');
  $('#current-page').text("Nuevo conocimiento");
  contentContainer.innerHTML = "";

  fetch('pages/nuevoConocimiento.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-nuevo').val();
      setValuesNuevo(defaultValue);
      setupCategoriaChangeHandler();
      new Quill('#editor-nuevo-cono', quillDefaultValue);
    })
    .catch(error => console.error('Error cargando nuevoConocimiento.html:', error));
});

function setupCategoriaChangeHandler() {
  $('#categoria-nuevo').change(function () {
    const selectedValue = $(this).val();
    setValuesNuevo(selectedValue);
  });
}

function setValuesNuevo(value) {
  const categoriaInfo = newKnowledgeObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(newKnowledgeObject.allFieldIds, categoriaInfo[value].fieldIds);
    updateFormLabelsAndPlaceholders(categoriaInfo[value]);
  }
}