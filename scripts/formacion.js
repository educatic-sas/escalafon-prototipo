import { formationObject } from '../utils/utils.js';

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
      const quill = new Quill('#editor-formacion', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'align': [] }],
            [{ 'indent': '-1'}, { 'indent': '+1' }], 
            ['clean'],
            ['link', 'image']
          ]
        },
        placeholder: '',
        theme: 'snow'
      });

      document.getElementById('btnAdicionarFormacion').addEventListener('click', function() {
        document.getElementById('form-row').style.display = 'block';
        document.getElementById('btnCancelarFormacion').style.display = 'inline-block';
      });
    
      document.getElementById('btnCancelarFormacion').addEventListener('click', function() {
        document.getElementById('form-row').style.display = 'none';
        document.getElementById('btnCancelarFormacion').style.display = 'none';
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

function updateFormLabelsAndPlaceholders(category) {
  $('#tituloLabel').text(category.labels.titulo);
  $('#tituloProducto').attr('placeholder', category.placeholders.titulo);

  $('#descripcionUrlLabel').text(category.labels.descripcion);
  $('#descripcionUrl').attr('placeholder', category.placeholders.descripcion);
}