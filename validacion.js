document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mensagem").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var mensagem = document.getElementById('mensagem').value;
    if(mensagem.length == 0) {
      alert('No has escrito nada');
      return;
    } else
        this.submit();
    }
  