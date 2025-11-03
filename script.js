
const itemInput = document.getElementById('itemInput');
const adicionarButton = document.getElementById('adicionarButton');
const listaItens = document.getElementById('listaItens');

adicionarButton.addEventListener('click', adicionarItem);
function adicionarItem() {
 const textoItem = itemInput.value;
    if (textoItem.trim() !== ''){
            const novoItem = document.createElement('li');
            novoItem.textContent = textoItem;

            listaItens.appendChild(novoItem);
            itemInput.value = '';
            itemInput.focus();

        } else{
            alert('Por favor digite uma tarefa valida!');
        }

    }


