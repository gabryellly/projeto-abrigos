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

function buscarAbrigo() {
if (Abrigos.length === 0) {
       alert("Ainda não Existem Abrigos Cadrastrados na sua Cidade");
    }else{
          const LocalizarAbrigo = prompt("Digite sua Cidade") .toLocaleLowerCase();
          let mensagem =

                ------------------------
                   LISTAGEM DE ABRIGOS:
                ------------------------
       
|  NOME   |   ENDEREÇO  |   TELEFONE   |  CAPACIDADE  |  CIDADE  |
------------------------------------------------------------------- 
      
-------------------------------------------------------------------;
for (let Abrigo of Abrigos) {
    if (Abrigo.Cidade.Includes(LocalizarAbrigo))
       {
        mensagem += "\n" + Abrigo.Nome + " " + Abrigo.Endereço + " " + Abrigo.Cidade + " " + Abrigo.Telefone + " " + AbrigoCapacidade
    }
 }
 alert(mensagem);
 }
 )+/
   /// finais

//variaveis

let Menu;
const DoadoresDeSangue
white (menu !== 5) {
    menu = Number(
        prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:
        `)
    );
    switch (menu) {
      case 1:
        Cadrastrar();
        break;
      case 2:
        Listar();
        break;
      case 3:
        BuscarDoadorTipoSanguineo();
        break;
      case 4:
        BuscarDadosData();
        break;
      case 5:
        alert("Cadrastro feito com sucesso, volte sempre!")
        break;
    default:

        alert("Opção Não Encontrada, Tente Novamente")
        break;

  }
} 
//Cadrastro do doador
function Cadastrar() {
  const Nome = prompt("Digite seu nome")
  const Idade = Number(prompt("Digite sua Idade"));
  const Peso = Number(prompt("Digite seu Peso"));
  const TipoSangue = prompt("Digite seu Tipo Sanguineo").toLocaleLowerCase
  const UltimaData = prompt("Digite a ultima data de Doação DD/MM/AAAA");
  Let varTeste = 0
  
  const Doador = {
    Nome,
    Idade,
    Peso,
    TipoSangue,
    UltimaData,
  };

  DoadoresDeSangue.push(Doador);
  alert("Doador Cadrastrado com sucesso");
}

//lista de doadores
function Listar() {
    if (DoadoresDeSangue.length === 0) {
        alert("Não Existe Doadores Cadrastrados");
      } else {
        let mensagem = '

                      -----------------------
                       LISTAGEM DE DOADORES:
                      -----------------------
   ----------------------------------------------------------------------                   
   |  NOME  |  IDADE  |   PESO   |  TIPO SANGUÍNEO   |   ÚLTIMA DOAÇÃO  |
   |                                                                    |
   |                                                                    |
   |                                                                    |
    --------------------------------------------------------------------
        `;  

    for (let Doador of DoadoresSangue) {
      if (Doador.UltimaData === DataBusca) {
        mensagem += '\n      ${Doador.Nome} ||  ${Doador.Idade} ||  ${Doador.Peso} || ${Doador.TipoSangue} ||  ${Doador.UltimaData}';
       }
     }
    alert(mensagem);
  }  
}
