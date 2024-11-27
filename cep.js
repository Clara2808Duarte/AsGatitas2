
<<<<<<< HEAD
=======

>>>>>>> 5d02ecfa31a688d9a5a758d2fbdd2a8cd08c1b5b
async function buscarEndereco() {
    const cep = document.getElementById('cep').value.trim()
    if(!cep) {  //SE NÃO TIVER CEP 
        alert('Por favor, digite um CEP.')
        return  //EXECUTA O IF
    }
    
    try {
        const response = await fetch(`http://localhost:5000/endereco/${cep}`)  //AWAIT (ESPERAR/AGUARDAR)
        if(!response.ok) { //SE NÃO TIVER CEP 
        throw new Error('CEP não encontrado')
    }

    const data = await response.json() //RECEBE O AWAIT
    console.log(data) 

    //EXIBE OS DADOS DO ENDEREÇO NO HTML
    document.getElementById('logradouro').textContent = data.logradouro || "N/A"
    document.getElementById('bairro').textContent = data.bairro || "N/A"
    document.getElementById('localidade').textContent = data.localidade || "N/A"
    document.getElementById('uf').textContent = data.uf || "N/A"
    document.getElementById('enderecoInfo').style.display = 'block'
    document.getElementById('erroMensagem').style.display = 'none'
 } 

 catch (error) {
        document.getElementById('erroMensagem').textContent = error.menssage
        document.getElementById('erroMensagem').style.display = 'block'
        document.getElementById('enderecoInfo').style.display = 'none'
     }
    }
<<<<<<< HEAD
    
=======
    

>>>>>>> 5d02ecfa31a688d9a5a758d2fbdd2a8cd08c1b5b
