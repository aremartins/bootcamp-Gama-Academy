//Orientação a objetos
//Classes
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}`
  }
}

//Herança
class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);

console.log(book.read())
console.log("Do autor " + book.author)
console.log("Número de páginas: " + book.pages)

let outherBook = new Book('Algoritmos e estruturas de dados em Java', 'Michael T. Goodrich', 200);
console.log(outherBook.read())

let newBook = new Book('O Algoritmo Mestre', 'Pedro Domingos', 300)
console.log(newBook.read())

console.log(book, outherBook, newBook);



let livroAlgoritmos = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos');
console.log(livroAlgoritmos)
console.log(livroAlgoritmos.pages)

//Encapsulamento com getters e setters
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person1 = new Person("Aretha");
person1.name = "Are";
console.log(person1.name)