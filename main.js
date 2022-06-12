var containerElemento = document.querySelector('.container')
var addPostElemento = document.querySelector('#addPost')


var inputFoto = document.querySelector('#foto')
var inputTitulo = document.querySelector('#titulo')
var inputDescricao = document.querySelector('#descricao')
var selectTipoPrato = document.querySelector('#tipoprato')
var inputPreco = document.querySelector('#preco')

let arrayNovosPosts = []

addPostElemento.addEventListener('click', event => { 
  event.preventDefault()
  let novoPost = {
    foto: inputFoto.value,
    titulo: inputTitulo.value,
    descricao: inputDescricao.value,
    tipoprato: selectTipoPrato.value,
    preco: inputPreco.value
  }
  containerElemento.innerHTML += ` 
        <div class="item">            
            <div class="header-item">
                <img src="${novoPost.foto}"> 
                <h2>${novoPost.titulo}</h2> 
                <p>${novoPost.descricao}</p>                
            </div>    
            <div class="footer-item">
                <div class="tipoprato">${novoPost.tipoprato}</div>
                <div class="footer-item-b" >             
                    <div class="preco">${novoPost.preco}</div>
                    <div class="social">Social</div>
                </div>
            </div>           
        </div>`
  arrayNovosPosts.push(novoPost)  
  inputFoto.value = ''
  inputTitulo.value = ''
  inputDescricao.value = ''
  selectTipoPrato.value = ''
  inputPreco.value = ''
})


var posts = [
  {
    foto: 'imagens/polpettone.jpg',
    titulo: 'Polpettone com linguini',
    descricao:'Feito com a mais macia carne bovina e molho de tomates frescos, nosso polpettone vem da mais tradicional receita Italiana. Servido com linguini caseiro, é a combinação perfeita para matar sua fome no melhor estilo italiano.',
    tipoprato: 'Italiana',
    preco: '150,00' 
  },  
  {
    foto: 'imagens/parmigiana.jpg',
    titulo: 'Parmigiana de filet mignon',
    descricao:'Fazendo o tradicional especial. Isso define nosso mignon à parmigiana. A carne é macia e o tempero no ponto certo para você sentir a explosão de sabores do molho, do queijo e da carne. Servido com arroz branco e batata, é perfeito para qualquer ocasião.',
    tipoprato: 'Italiana',
    preco: '120,00' 
  },
  {
    foto: 'imagens/rosti.jpg',
    titulo: 'Batata rosti recheada',
    descricao: 'Batata não precisa ser só batata. Nossa Batata Rosti traz uma combinação de queijos adocicados e salgados, para dar formar um sabor único. Trazemos o presunto na medida certa para compor a textura. É crocante por fora, mas derrete na boca.',
    tipoprato: 'Suíça/Alemã',
    preco: '80,00'   
  },
  {
    foto: 'imagens/risoto.jpg',
    titulo: 'Risoto de limão siciliano',
    descricao: 'Por que só arroz se podemos ter esse belíssimo risoto? O gosto e o aroma do limão siciliano estimulam o paladar e faz com que o gosto do queijo fique pronunciado. Um prato simplesmente divino. Ele faz o show.',
    tipoprato: 'Italiana',
    preco: '100,00'   
  },
  {
    foto: 'imagens/paella.jpg',
    titulo: 'Paella espanhola',
    descricao: 'Um pedacinho da Espanha no seu prato. Os frutos do mar são selecionados, as cores e os aromas harmonizam com a mistura de gostos que somente uma boa paella proporciona.',
    tipoprato: 'Espanhola',
    preco: '250,00'   
  },
  {
    foto: 'imagens/gomesdesa.jpg',
    titulo: 'Bacalhau Gomes de Sá',
    descricao: 'O azeite escorrendo, cebola, alho e azeitonas exalando um aroma que agrada os paladares mais exigentes. Quando passar o garfo em nosso bacalhau, sentirá na mão a maciez que você sentirá em sua boca quando provar essa delícia.',
    tipoprato: 'Portuguesa',
    preco: '200,00'   
  },
  {
    foto: 'imagens/alheira.jpg',
    titulo: 'Alheira',
    descricao: 'O segredo escondido pelos judeus foi desvendado nesse prato divino. Nossa alheira tem sabor especial, tempero pronunciado que combina com o brócolis puxado no azeite e com farofinha de pinhões.',
    tipoprato: 'Judia',
    preco: '150,00'   
  },
  {
    foto: 'imagens/tapascomjamon.jpg',
    titulo: 'Tapas com Jamon',
    descricao: 'Está com pressa, mas não quer deixar de comer bem? Experimente nossas tapas com pão com pesto e fatias deliciosas de jamon ibérico. As azeitonas dão equilíbrio nessa mistura. Você vai sentir que um lanche com os amigos pode ser uma verdadeira viagem.',
    tipoprato: 'Espanhola',
    preco: '145,00'   
  }
]


for (let post of posts) {
  containerElemento.innerHTML += `
        <div class="item">           
            <div class="header-item">
                <img src="${post.foto.trim()}">
                <h2>${post.titulo.trim()}</h2>
                <p>${post.descricao.trim()}</p>                
            </div>
            <div class="footer-item">
                <div class="tipoprato">${post.tipoprato}</div>
                <div class="footer-item-b" >           
                    <div class="preco">${post.preco.trim()}</div>
                    <div class="social">Social</div>
                </div>    
            </div>   
        </div>
    `
}