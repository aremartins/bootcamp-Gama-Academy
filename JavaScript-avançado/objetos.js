const pessoa = {
  nome: 'Larissa',
  idade: '22',
  cidade: 'São Paulo'
}

//Notação de ponto

console.log(pessoa.nome)

//Notação de colchetes
console.log(pessoa['idade'])

//Como desestruturar objetos
const {nome, idade, cidade} = pessoa

console.log(nome)//Como desestruturei nao precisa usar a notação de ponto