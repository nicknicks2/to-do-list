alert('ola mundo');


const itemInput = document.getElementById('itemImput');
const adicionarButton = document.getElementById('adicionarButton');
const listaItens = document.getElementById('listaItens');

adicionarButton.addEventListener('click', adicionarItem);

function adicionarItem() {
 const textoItem = itemInput.value;

    if (textoItem.trin() !== '')
        {
            const novoItem = document.createElement('li');
            novoItem.textContent = textoItem;

            listaItens.appendChild(novoItem);


            itemInput.value = '';
            itemInput.focus();

        } else{
            alert('Por favor digite uma tarefa valida!');
        }

    }


