# projeto-abrigos
<<<<<<<HEAD 
//banco de dados de abrigos que tem no estado
let abrigos = []

//variaveis
let menu
const listarAbrigos = []
while (menu !== 5) {
    menu = Number(
    prompt('===== abrigos temporários =====')
    1. Cadrastrar

    2. Listar abrigos

    3. Procurar abrigo

    4. sair

    Escolha uma opção;)
}
    switch (menu) {
    casa 1;
         Cadrastrar()
         break;
    case 2;
         Listar()
         break;
    case 3;
         BuscarAbrigos()
         break;
    case 4;
         alert("Obrigado por acessar esse sistema!")
         break;
    default:
         alert("não temos essa opção")
         break;
    }         

functionCadrastrar() {
    const NomeAbrigo = prompt ("digite o nome do abrigo")
    const EndereçoAbrigo = prompt ("digite o Endereço do abrigo")
    const CidadeAbrigo = prompt ("digite a cidade do abrigo") .toLocaleLowerCase ()
    const TelefoneAbrigo = Number = (prompt ("digite o telefone do abrigo"))
    const CapacidadeAbrigo  = Number = (prompt ("digite quantas pessoas o abrigo suporta"))
    abrigo.push({ NomeAbrigo,Endereço: EndereçoAbrigo, Cidade: CidadeAbrigo, Telefone: TelefoneAbrigo, capacidade: CapacidadeAbrigo });
    AbrigosCadastrados.push(Abrigo);
    alert("Abrigo cadrastrado com sucesso!");
   }
function Listar() {
    if (Abrigos.length === 0) {
        alert("ainda não Existem Abrigos Cadrastrados");
    }else{
       let mensagem =

                ------------------------
                   LISTAGEM DE ABRIGOS:
                ------------------------
       
|  NOME   |   ENDEREÇO  |   TELEFONE   |  CAPACIDADE  |  CIDADE  |
------------------------------------------------------------------- 
      
-------------------------------------------------------------------
for (let Abrigo of Abrigos)
     mensagem+= '\n $(Abrigo.Nome)  $(Abrigo.Endereço)  $(Abrigo.Cidade) $(Abrigo.Telefone) $(AbrigoCapacidade)'
    }
    alert(mensagem);
    }
}

function buscarAbrigo() 
