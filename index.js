function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') 
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
      renderBooks(data)
      //findCharacterByNumber(data)
      totalPages(data)
    })
    
    
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

/*function findCharacterByNumber(books, number= '1031') {
  for (first of books) {
    for (character in first.characters) {
      if (first.characters[character] === `https://anapioficeandfire.com/api/characters/${number}`)
      console.log(first.characters[character])
    }
  }

}*/

function totalPages(books) {
  const total = books.reduce((pageCount, element) => pageCount + element.numberOfPages, 0)
  console.log(total)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
