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
  document.getElementById('btnAdicionarIdioma').addEventListener('click', function() {
    document.getElementById('form-idioma-row').style.display = 'block';
    document.getElementById('btnCancelarIdiomas').style.display = 'inline-block';
  });

  document.getElementById('btnCancelarIdiomas').addEventListener('click', function() {
    document.getElementById('form-idioma-row').style.display = 'none';
    document.getElementById('btnCancelarIdiomas').style.display = 'none';
  });
}