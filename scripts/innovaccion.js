import { innovationObject, quillDefaultValue } from '../utils/utils.js';

document.getElementById('innovacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('innovacionContent');
  $('#current-page').text("Innovación");
  contentContainer.innerHTML = "";

  fetch('pages/innovaccion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-inn').val();
      setValuesInnova(defaultValue);
      setupCategoriaInnovacionChangeHandler();
      new Quill('#editor-innovacion', quillDefaultValue);
    })
    .catch(error => console.error('Error cargando innovacion.html:', error));

});

function setupCategoriaInnovacionChangeHandler() {
  $('#categoria-inn').on('change', function () {
    const selectedValue = $(this).val();
    setValuesInnova(selectedValue);
  });
}

function setValuesInnova(value) {
  const categoriaInfo = innovationObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(innovationObject.allFieldIds, categoriaInfo[value].fieldIds);
    updateFormLabelsAndPlaceholders(categoriaInfo[value]);
  }
}