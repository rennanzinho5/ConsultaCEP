async function buscarCEP() {
    const cepInput = document.getElementById('cepInput').value.trim().replace('-', '');
    if (!cepInput || cepInput.length !== 8 || isNaN(cepInput)) {
      alert('Por favor, digite um CEP válido (apenas números).');
      return;
    }
  
    const url = `https://viacep.com.br/ws/${cepInput}/json/`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.erro) {
        alert('CEP não encontrado.');
      } else {
        mostrarResultado(data);
      }
    } catch (error) {
      alert('Ocorreu um erro ao buscar o CEP.');
      console.error('Erro:', error);
    }
  }
  
  function mostrarResultado(data) {
    const tabela = document.getElementById('resultado').getElementsByTagName('tbody')[0];
  
    // Criar nova linha e inserir no início da tabela
    const newRow = tabela.insertRow(0);
  
    const cepCell = newRow.insertCell(0);
    cepCell.textContent = data.cep;
  
    const logradouroCell = newRow.insertCell(1);
    logradouroCell.textContent = data.logradouro;
  
    const bairroCell = newRow.insertCell(2);
    bairroCell.textContent = data.bairro;
  
    const cidadeCell = newRow.insertCell(3);
    cidadeCell.textContent = data.localidade;
  
    const estadoCell = newRow.insertCell(4);
    estadoCell.textContent = data.uf;
  }
  