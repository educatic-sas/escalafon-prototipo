document.getElementById('laboral-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('laboralContent');
  $('#current-page').text("Laboral");
  contentContainer.innerHTML = "";

  fetch('pages/laboral.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const quill = new Quill('#editor', {
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

      document.getElementById('btnAdicionarLaboral').addEventListener('click', function() {
        document.getElementById('form-laboral-row').style.display = 'block';
        document.getElementById('btnCancelarLaboral').style.display = 'inline-block';
      });
    
      document.getElementById('btnCancelarLaboral').addEventListener('click', function() {
        document.getElementById('form-laboral-row').style.display = 'none';
        document.getElementById('btnCancelarLaboral').style.display = 'none';
      });
    })
    .catch(error => console.error('Error cargando laboral.html:', error));
});