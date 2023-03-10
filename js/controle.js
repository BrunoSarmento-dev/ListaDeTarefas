let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')



function addTarefa() {
      //PEGAR O VALOR DIGITADO NO INPUT
      let valorInput = input.value;

      //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
      if (valorInput == null || valorInput.trim() == "") {
            document.getElementById("error").hidden = false;
            input.style.border = "3px solid red";
            // adiciona a classe animate__shakeX ao elemento
            document.getElementById("error").classList.add("animate__shakeX");
            // remove a classe animate__shakeX após 300 milisegundos
            setTimeout(() => {
                  document.getElementById("error").classList.remove("animate__shakeX");
            }, 300);
            return;
      }
      document.getElementById("error").hidden = true;
      input.style.border = "1px solid black";



      ++contador;

      let novoItem = `<div id="${contador}" class="item">
      <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
      </div>
      <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
      </div>
      <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete" class="tamanho"></i> <span class="tamanho">Deletar</span></button>
      </div>
      </div>`;

      // ADICIONAR NOVO ITEM NO MAIN
      main.innerHTML += novoItem;

      //ZERAR OS CAMPOS
      input.value = "";
      input.focus();
}


function deletar(id) {
      var tarefa = document.getElementById(id);
      tarefa.remove();
}

function marcarTarefa(id) {
      var item = document.getElementById(id);
      var classe = item.getAttribute("class");

      if (classe == "item") {
            item.classList.add("clicado");

            var icone = document.getElementById("icone_" + id)
            icone.classList.remove("mdi-circle-outline");
            icone.classList.add("mdi-check-circle");

            // item.parentNode.appendChild(item);


      } else {
            item.classList.remove("clicado");

            var icone = document.getElementById("icone_" + id)
            icone.classList.remove("mdi-check-circle");
            icone.classList.add("mdi-circle-outline");
      }
}


input.addEventListener("keyup", function (event) {
      // SE TECLOU ENTER (Nº13)
      if (event.keyCode === 13) {
            event.preventDefault();
            btnAdd.click();
      }
}
);


