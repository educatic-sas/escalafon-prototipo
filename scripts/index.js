document.getElementById('laboral-tab').addEventListener('click', function () {
  $('#current-page').text("Laboral");
});

document.getElementById('complementaria-tab').addEventListener('click', function () {
  $('#current-page').text("Complementaria");
});

document.getElementById('idiomas-tab').addEventListener('click', function () {
  $('#current-page').text("Idiomas");
});

function hidecategoryInfo(categoryInfo) {
  $('.descripcionCategoria').text(categoryInfo);
  if (categoryInfo == '') {
    $('.categoriaInfo').hide();
  } else {
    $('.categoriaInfo').show();
  }
}

function setOtherFields(allFieldIds, selectedFieldIds) {
  allFieldIds.forEach(fieldId => $('#' + fieldId).hide());
  selectedFieldIds.forEach(fieldId => $('#' + fieldId).show());
}

function updateFormLabelsAndPlaceholders(category) {
  $('#tituloLabel').text(category.labels.titulo);
  $('#tituloProducto').attr('placeholder', category.placeholders.titulo);
  $('#descripcionUrlLabel').text(category.labels.descripcion);
}