const mainContainer= document.createElement('div')
const body= document.querySelector('body')
const header= document.createElement('div')
const sloganImg= document.createElement('img')
sloganImg.classList.add('slogan')
sloganImg.src='https://receitasdocheff.com.br/wp-content/uploads/2019/11/logo.png'
const navList= document.createElement('ul')
navList.classList.add('barra-de-navegacao')
mainContainer.classList.add('main-container')
header.classList.add('header')
const containerSearchIcon= document.createElement('div')
containerSearchIcon.classList.add('search-icon-container')
const lupa= document.createElement('img')
lupa.src='./icons8-lupa-64.png'

header.appendChild(sloganImg)
containerSearchIcon.appendChild(lupa)

const todasAsCategorias = criarDiv('todas-as-categorias')
const lista= [{
  text:'RECEITAS DE BOLOS',
  href:'https://receitasdocheff.com.br/bolos/'
},
{
  text:'RECEITAS DE TORTAS',
  href:'https://receitasdocheff.com.br/tortas/'
},
{
  text:'CARNES',
  href:'https://receitasdocheff.com.br/carnes/'
},
{
  text:'DOCES E SOBREMESAS',
  href:'https://receitasdocheff.com.br/doces-e-sobremesas/'
},
{
  text:'FRANGO',
  href:'https://receitasdocheff.com.br/frango/'
},
{
  text:'COMIDA TIPICA',
  href:'https://receitasdocheff.com.br/comida-tipica/'
},
{
  text:'MASSAS',
  href:'https://receitasdocheff.com.br/massas/'
}]

function adicionarItensALista(ul,lista) {
  lista.forEach((obj) => {
      const li = document.createElement('li');
      const link = document.createElement('a');

      link.href = obj.href;
      link.textContent = obj.text;
      li.appendChild(link);
      link.style.textDecoration='none'
      
      link.style.color='black'
      link.style.fontFamily='Arial'
      li.style.listStyle='none'
      ul.style.padding='0'
      ul.appendChild(li);
  });
}


function criarDiv(classe){
  const div= document.createElement('div')
  div.classList.add(classe)
  return div
 }
 
body.appendChild(mainContainer);
const divDeButtons= criarDiv('div-list-button')

adicionarItensALista(navList,lista);
divDeButtons.appendChild(navList)
const listItems = divDeButtons.querySelectorAll('li');
listItems.forEach((li) => {
  li.addEventListener('mouseover', () => {
    const link = li.querySelector('a');
    link.style.color = 'white';
    li.style.background='#7BA08D'
  });
});
listItems.forEach((li) => {
  li.addEventListener('mouseout', () => {
    const link = li.querySelector('a');
    link.style.color = 'black';
    li.style.background='white'
  });
});

const divSlogan = criarDiv('div-slogan')
divSlogan.appendChild(sloganImg)
header.appendChild(divSlogan)
header.appendChild(divDeButtons)
mainContainer.appendChild(header);
const divInput=criarDiv('div-input')
  const saveInputFromContainer=criarDiv('save-input')
  saveInputFromContainer.appendChild(divInput)
  
 mainContainer.appendChild(saveInputFromContainer)


const listaDeReceitas=[{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/Untitled-1.jpg',
  text:'Acompanhamentos',
  href:'https://receitasdocheff.com.br/acompanhamentos/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/Untitled-1-1.jpg',
  text:'Bebidas',
  href:'https://receitasdocheff.com.br/bebidas/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/bolo-2.jpg',
  text:'Bolos',
  href:'https://receitasdocheff.com.br/bolos/',
},

{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/Untitled-1-2.jpg',
  text:'Carnes',
  href:'https://receitasdocheff.com.br/carnes/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/comida-fitness-1.jpg',
  text:'Comida fitnes',
  href:'https://receitasdocheff.com.br/comida-fitness/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/dicas.jpg',
  text:'Dicas',
  href:'https://receitasdocheff.com.br/dicas/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/doces-e-sobremesas.jpg',
  text:'Doces e Sobremesas',
  href:'https://receitasdocheff.com.br/doces-e-sobremesas/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/frango-1.jpg',
  text:'Frango',
  href:'https://receitasdocheff.com.br/frango/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/massas-1.jpg',
  text:'Massas',
  href:'https://receitasdocheff.com.br/massas/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/molho-1.jpg',
  text:'Molhos',
  href:'https://receitasdocheff.com.br/molhos/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/peixes-min.jpg',
  text:'Peixes',
  href:'https://receitasdocheff.com.br/peixes/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2019/11/saladas-min.jpg',
  text:'Saladas',
  href:'https://receitasdocheff.com.br/saladas/',
},]


function criarItemArray(receitas,categorias) {
  receitas.forEach((item) => {
    const categoria = criarDiv('categoria');
    const linkCategoria=document.createElement('a')
    const imgCategoria = document.createElement('img');
    imgCategoria.src = item.src;
    const divImg= criarDiv('div-img') 
    divImg.appendChild(imgCategoria)
    categoria.appendChild(divImg);
    linkCategoria.href= receitas.href
    linkCategoria.target='_blank'
    categoria.appendChild(linkCategoria);
    const listaComImg= document.createElement('ul');
    adicionarItensALista(listaComImg, [item]); 
    categoria.appendChild(listaComImg);
    categorias.appendChild(categoria);
    categoria.addEventListener('click', () => {
      window.location.href = item.href;
    });
  });
}
header.appendChild(containerSearchIcon)

const ultimaLista=[{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/receita_suco_abacaxi_capim_santo_01-392x261.jpg',
  text:'Suco de abacaxi com hortelã rápido e simples',
  href:'https://receitasdocheff.com.br/bebidas/suco-de-abacaxi-com-hortela-rapido-e-simples/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/images.jpg',
  text:'Suco de couve fitness',
  href:'https://receitasdocheff.com.br/bebidas/suco-de-couve-fitness/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/pure-patatas-m-392x261.jpg',
  text:'Purê de batata com noz moscado simples',
  href:'https://receitasdocheff.com.br/acompanhamentos/pure-de-batata-com-noz-moscada-simples/',
},

{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/receita_de_parmegiana_de_carne_moda_com_batata_2020-11-13-768x513.jpg',
  text:'Carne moída com tomate muito deliciosa',
  href:'https://receitasdocheff.com.br/acompanhamentos/carne-moida-com-tomate-muito-deliciosa/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/usuario-2208-4b9a02339e15f255be92b0c45ddf594c-392x250.jpg',
  text:'Pizza de frigideira fácil e rápido',
  href:'https://receitasdocheff.com.br/massas/pizza-de-frigideira-facil-e-rapido/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/2125137450-esfirra-carne-tradicional-1-768x512-1.jpg',
  text:'Massa de esfirra de carne-simples e prática',
  href:'https://receitasdocheff.com.br/massas/massa-de-esfirra-de-carne-simples-e-pratica/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/maxresdefault-392x261.jpg',
  text:'Receita de joelho de padaria',
  href:'https://receitasdocheff.com.br/massas/receita-de-joelho-de-padaria/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/18089807-torta-atum-liquidificador-768x512-1-768x512.jpg',
  text:'Torta de atum de liquidificador em poucos...',
  href:'https://receitasdocheff.com.br/tortas/torta-de-atum-de-liquidificador-em-poucos-minutos/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/1453285148162.jpg',
  text:'Quindão tradicional',
  href:'https://receitasdocheff.com.br/doces-e-sobremesas/quindao-tradicional/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/creme-de-confeiteiro-500x397-1-392x261.jpg',
  text:'Creme patissiere clássico para sobremesas',
  href:'https://receitasdocheff.com.br/doces-e-sobremesas/creme-patissiere-classico-para-sobremesas/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/bolo-de-coco-e-limao-vegano-6-392x261.jpg',
  text:'cobertura de limão para bolo muito simples',
  href:'https://receitasdocheff.com.br/doces-e-sobremesas/cobertura-de-limao-para-bolo-muito-simples/',
},
{
  src:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/img_1_33_133-392x261.jpg',
  text:'Bolo vulcão de cenoura caseiro',
  href:'https://receitasdocheff.com.br/wp-content/uploads/2021/06/img_1_33_133-392x261.jpg',
},]
const iconePesquisaInput= document.createElement('div')
iconePesquisaInput.classList.add('icone-pesquisa')
const imgPesquisaInput= document.createElement('img')
imgPesquisaInput.src='./icons8-lupa-64.png'
const input= document.createElement('input')
input.classList.add('barra-de-pesquisa')
iconePesquisaInput.appendChild(imgPesquisaInput)
divInput.appendChild(input)
divInput.appendChild(iconePesquisaInput)

let click = true;
containerSearchIcon.addEventListener('click',()=>{
  click=!click
  if(!click){
  saveInputFromContainer.style.display = 'flex';
  }else{
 saveInputFromContainer.style.display='none'
  }
})


criarItemArray(listaDeReceitas,todasAsCategorias)
function instanciarSectionDeReceita(titulo, subtitulo,lista) {
  const categorias = criarDiv('categorias');
  const tituloCategoria= criarDiv('titulo-categoria');
  const divTitulo = criarDiv('div-titulo');
  const divLinhaDireita = criarDiv('div-linha-direita');
  const linhaEsquerda = criarDiv('div-linha-esquerda');

  divTitulo.appendChild(divLinhaDireita);

  const spanTitulo = document.createElement('span');
  spanTitulo.classList.add('titulo');
  spanTitulo.textContent = titulo;
  divTitulo.appendChild(spanTitulo);

  divTitulo.appendChild(linhaEsquerda);
  tituloCategoria.appendChild(divTitulo);

  const subtituloSpan = document.createElement('span');
  subtituloSpan.classList.add('subtitulo');
  subtituloSpan.textContent = subtitulo;
  tituloCategoria.appendChild(subtituloSpan); // Adiciona o subtitulo à divTitulo

  mainContainer.appendChild(tituloCategoria);
  mainContainer.appendChild(categorias);
  criarItemArray(lista, categorias); // Corrigido: usar listaComImg2 em vez de listaDeReceitas
}


instanciarSectionDeReceita('ESCOLHA SUA PRÓPRIA RECEITA', 'NAVEGUE POR CATEGORIA',listaDeReceitas);
instanciarSectionDeReceita('RECEITAS FÁCEIS TODO DIA','ÚLTIMAS PUBLICAÇÕES',ultimaLista)
const voltarAoTopo= criarDiv('voltar-ao-topo')
const imgSubir= document.createElement('img')
imgSubir.src='./seta.png'
voltarAoTopo.appendChild(imgSubir)

function verificarPosicaoScroll() {
  if (window.pageYOffset > 100) { 
    voltarAoTopo.style.display = 'flex';
  } else {
    voltarAoTopo.style.display = 'none';
  }
}

voltarAoTopo.addEventListener('click',()=>{
 window.scrollTo(0,0)
})

window.addEventListener('scroll',verificarPosicaoScroll)
mainContainer.appendChild(voltarAoTopo)
