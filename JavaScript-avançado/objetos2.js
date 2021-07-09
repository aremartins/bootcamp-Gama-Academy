const filmes =[
  {
    id: 1,
    titulo: "Dilema das Redes",
    descricao: "Um documentário sobre tecnologia",
    duracao: 120
  },
  {
    id: 2,
    titulo: "Pequena Miss Sunshine",
    descricao: "Filme de comédia",
    duracao: 120
  },
  {
    id: 3,
    titulo: "Alan Turing",
    descricao: "Filme sobre tecnologia",
    duracao: 120
  },

]
//objetos destructuring
const [{ id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme))
