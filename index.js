fetch('https://fakerapi.it/api/v1/books')
    .then(response => response.json())
    .then(r => console.log(r))
    .then(r => {
        console.log(r.data)
        const bookList = document.getElementById('book-list');

        for (i = 0; i < 6; i++) {
            const li = document.createElement('li');
            li.textContent = `${r.data[i].title} by ${r.data[i].author}`;
            bookList.appendChild(li);
        }
    })
    .catch(error => console.error(error));