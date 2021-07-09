const livros = require('./database');

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro?S/N ');
if(entradaInicial.toLocaleLowerCase() == 's') {
  console.log("Essas são as categorias disponíveis:");
  console.log('Tecnologia', '/Soft skills', '/Data Science','/Produtividade');

  const entradaCategoria = readline.question('Qual categoria voce escolhe?');

  const retorno = livros.filter(livro => livro.categoria == entradaCategoria);

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b)=> a.paginas - b.paginas)
  console.log("Essas são todas os livros disponíveis");
  console.table(livrosOrdenados);
}



