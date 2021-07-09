****Livraria****
*Acessar dados em estruturas de dados como array de objetos
*Utilizar métodos de iteração filter e sort
*Inicializar projeto node com npm init
*Instalar depedência pelo node

*utilizamos a biblioteca readline para simular um input
*criamos um database para simular um arquivo json

*O sistema pergunta se o usuário deseja buscar um livro

*Se for sim, mostra as categorias e pergunta qual categoria
Essas são as categorias disponíveis:
Tecnologia /Soft skills /Data Science /Produtividade
Qual categoria voce escolhe?
┌─────────┬────┬───────────────────────────┬─────────────────────────┬────────────────┬─────────┬───────────┬───────┐
│ (index) │ id │           nome            │          autor          │   categoria    │ paginas │ recomenda │  leu  │
├─────────┼────┼───────────────────────────┼─────────────────────────┼────────────────┼─────────┼───────────┼───────┤
│    0    │ 6  │        'Outliers'         │    'Malcon Gladwell'    │ 'Data Science' │   254   │   false   │ false │
│    1    │ 7  │ 'A Lógica do Cisne Negro' │ 'Nassim Nicholas Taleb' │ 'Data Science' │   225   │   false   │ false │

*Se não, mostra todos os livros em ordem crescente pela qtd de páginas
─────────┬────┬──────────────────────────────┬─────────────────────────┬─────────────────┬─────────┬───────────┬───────┐
│ (index) │ id │             nome             │          autor          │    categoria    │ paginas │ recomenda │  leu  │
├─────────┼────┼──────────────────────────────┼─────────────────────────┼─────────────────┼─────────┼───────────┼───────┤
│    0    │ 2  │          'Mindset'           │      'Carol Dweck'      │  'Soft skills'  │   194   │   false   │ false │
│    1    │ 1  │     'Digital minimalism'     │     'Carl Newport'      │ 'Produtividade' │   204   │   false   │ false │
│    2    │ 7  │  'A Lógica do Cisne Negro'   │ 'Nassim Nicholas Taleb' │ 'Data Science'  │   225   │   false   │ false │
│    3    │ 6  │          'Outliers'          │    'Malcon Gladwell'    │ 'Data Science'  │   254   │   false   │ false │
│    4    │ 3  │ '21 Lições para o século 21' │     'Yuval Harari'      │  'Tecnologia'   │   300   │   false   │ false │
│    5    │ 4  │          'Sapiens'           │     'Yuval Harari'      │ 'Produtividade' │   301   │   false   │ false │
│    6    │ 5  │     'O Algoritmo Mestre'     │    'Pedro Domingos'     │  'Tecnologia'   │   350   │   false   │ false 