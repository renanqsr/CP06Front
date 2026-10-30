document.addEventListener('DOMContentLoaded', function () {
  const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
  const bookList = document.getElementById('book-list');

  fetch(booksEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os livros');
      }
      return response.json();
    })
    .then((books) => {
      books.forEach((book) => {
        const card = document.createElement('article');
        card.className = 'bg-white border-2 border-black-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-md transition-transform duration-200 hover:-translate-y-1';
        card.innerHTML = `
          <img src="${book.imagem}" alt="${book.titulo}" class="w-full h-64 object-cover transition-transform duration-200 hover:scale-95">
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">${book.titulo}</h3>
            <p class="text-sm text-black">${book.resumo}</p>
          </div>
        `;
        bookList.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Erro ao carregar os livros:', error);
      bookList.innerHTML = '<p class="text-red font-bold">Não foi possível carregar os livros.</p>';
    });
});