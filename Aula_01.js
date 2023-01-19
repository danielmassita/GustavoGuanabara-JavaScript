// Aula 1 – O que o JavaScript é capaz de fazer?
// https://www.youtube.com/watch?v=Ptbk2af68e8

/*
Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet? Sabe para que servem as tecnologias HTML5, CSS3 e JavaScript? Consegue citar 4 sites que utilizam a linguagem JavaScript nos seus códigos?
Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.
*/

/*
- O que o JS faz? Faz PRATICAMENTE tudo!
- Pra quem é esse curso? (Para você que quer fazer!)
- CLIENT (mobile, web, user) x SERVER (banco de dados, forms, cloud).
- Quando acessamos um site, por exemplo, entramos num NAVEGADOR que por meios de protocolos direciona um pedido de uma cópia de um arquivo (index.html) para um servidor (da Google, por exemplo), e me devolve uma cópia "manipulável exibida" pra minha máquina.
- NAVEGADOR vai exibir um site com diversas tecnologias, tipo JavaSCript, (CLIENT SIDE) pra exibir o que queremos. Muitas vezes, são tecnologia relacionadas:
- HTML, CSS e JavaScript:
-- Exemplo do paralelo com o jornal:
-- Jornalista = texto, conteúdo, foto, catalogar o conteúdo) = HTML
-- Designer = formatos, cores, estrutura, etc. = CSS
-- Programador = interação entre as partes, logística, supply chain, etc. = JavaScript
-- Se diz que "programamos em JavaScript", mas é preferível dizer que "desenvolvemos em HTML/CSS" (e NÃO programar nessas linguagens).

- Quem usa o JavaScript? (Google, Netflix, Linkedin, Youtube, Facebook...)
- Abrir o Google Chrome (pra abrir o F12 - Ferramentas de Desenvolvimento, INSPECIONAR)
- www.google.com.br (Curso em Vídeo) - Ver os links, dicas, imagens... 
- Abrir o DevTools e DESABILITAR o JavaScript (Settings > Debug > Desabilitar JS > F5 (atualizar)) = Google Velho
- Tentar abrir o YouTube, por exemplo, ou Google Imagens. 
- Re-habilitar o JS no DevTools

- Abrir o Google (exercício de "alterar" a página do Google):
- F12 > Console > Digitar
alert("Olá, Mundo!")
document.body.style.background = 'black'
- Clicar na "setinha de inspecionar elementos" do DevTools e passar sobre a logo do Google (img#hplogo)
document.querySelector('img#hplogo').style.filter = 'grayScale(100%)'
document.querySelector('img#hplogo').style.visibility = 'hidden'

- EU ALTEREI O JAVASCRIPT?
- Não, apenas alterei o arquivo que eu já recebi e carreguei no meu pc, e estou exibindo as interações ainda no meu PC. 
- Se apertar F5, tudo volta ao normal pois um novo arquivo do servidor é carregado.

- Abrir o site do G1 (exercício de "alterar" uma matéria principal do portal de notícias)
- Abrir o DevTools > Setinha > Passar no Título Principal (e anotar o nome 'span.bstn-hl-title') e digitar no Console (ctrl+L limpa tudo):
document.querySelector('span.bstn-hl-title').innerText = "seu texto aqui!"
- Tirar um print-screen da página oficial do G1 e expalhar as "fake news" hehe! Brincadeira! 
FIM AULA

Links Adicionais

Alura - HTML, CSS e JavaScript, quais as diferenças?
https://www.alura.com.br/artigos/html-css-e-js-definicoes

O HTML é uma linaguagem de marcação. O CSS é uma linguagem de estilo. O JavaScript é uma linguagem de programação.

- HTML (estrutura)

<p>Este é um parágrafo!</p>

<link rel="stylesheet" href="nome_do_arquivo.css"> // dentro do código html e head
<script src="nome_do_arquivo_js.js"></script> // importar o JS no head do html

<script> // dentro do código html
    alert('Hello, World!')
</script>


- CSS (estética)

seletor {
    propriedade: valor;
}

p {
    color: blue;
}

- JavaScript (linguagem de programação)
alert('Hello, World!')

HTML: linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos.

CSS: linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.

Javascript: linguagem de programação utilizada para deixar a página com mais movimento, podendo atualizar elementos dinamicamente e lidar melhor com dados enviados e recebidos na página.

O HTML é o esqueleto, composto dos ossos que o sustenta. O CSS é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o Javascript é o músculo, que dá movimento ao corpo.

*/

