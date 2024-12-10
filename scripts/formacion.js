import { formationObject, quillDefaultValue } from '../utils/utils.js';

document.getElementById('formacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('formacionContent');
  $('#current-page').text("Formación");
  contentContainer.innerHTML = "";
  fetch('pages/formacion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-form').val();
      setValuesForm(defaultValue);
      setupCategoriaFormacionChangeHandler();
      new Quill('#editor-formacion', quillDefaultValue);
      new Quill('#editor-formacion2', quillDefaultValue);

      document.getElementById('btnAdicionarFormacion').addEventListener('click', function() {
        document.getElementById('form-row').style.display = 'block';
        document.getElementById('btnCancelarFormacion').style.display = 'inline-block';
      });
    
      document.getElementById('btnCancelarFormacion').addEventListener('click', function() {
        document.getElementById('form-row').style.display = 'none';
        document.getElementById('btnCancelarFormacion').style.display = 'none';
      });

      document.getElementById('btnAdicionarProdFormacion').addEventListener('click', function() {
        document.getElementById('form-prod-row').style.display = 'block';
        document.getElementById('btnCancelarProdFormacion').style.display = 'inline-block';
      });
    
      document.getElementById('btnCancelarProdFormacion').addEventListener('click', function() {
        document.getElementById('form-prod-row').style.display = 'none';
        document.getElementById('btnCancelarProdFormacion').style.display = 'none';
      });
    })
    .catch(error => console.error('Error cargando formacion.html:', error));

});

function setupCategoriaFormacionChangeHandler() {
  $('#categoria-form').change(function () {
    const selectedValue = $(this).val();
    setValuesForm(selectedValue);
  });
}

function setValuesForm(value) {
  const categoriaInfo = formationObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(formationObject.allFieldIds, categoriaInfo[value].fieldIds);
    updateFormLabelsAndPlaceholders(categoriaInfo[value]);
  }
}