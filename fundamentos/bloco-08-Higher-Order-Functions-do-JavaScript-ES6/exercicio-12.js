const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  function authorBornIn1947(books) {
      return books.find((book) => book.author.birthYear === 1947).author.name;
    // escreva aqui o seu código
  }
  console.log(authorBornIn1947(books));

  function smallerName() {
    let nameBook;
    books.forEach((book) => {
     if(!nameBook || book.name.length < nameBook.length){
        nameBook  = book.name;
      }
    })
    // escreva aqui o seu código
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
console.log(smallerName(books));


  function getNamedBook() {
      return books.find((book) => book.name.length === 26);
    // escreva seu código aqui
  }
  console.log (getNamedBook (books));


function everyoneWasBornOnSecXX() {
    return books.every((book) => book.author.birthYear > 1900);
  // escreva seu código aqui
}
console.log(everyoneWasBornOnSecXX(books));


function someBookWasReleaseOnThe80s() {
   return books.some((book) => book.releaseYear >= 1980 || book.releaseYear <= 1989);
}
  // escreva seu código aqui
console.log(someBookWasReleaseOnThe80s(books));


const expectedResult = false;

function authorUnique() {
    return books.some((book) => book.author.birthYear === );
    // escreva seu código aqui
  }
  console.log(everyoneWasBornOnSecXX(books));