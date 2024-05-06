document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('meuModal').style.display = 'block';
  });
  
  document.querySelector('.fechar').addEventListener('click', function() {
    document.getElementById('meuModal').style.display = 'none';
  });