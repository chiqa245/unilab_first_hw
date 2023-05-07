function retrieveServicesData(){
    fetch('https://fakerapi.it/api/v1/books')
    .then(response => response.json())
    .then(r => {
        const bookList = document.getElementById('book-list');

        for (i = 0; i < 6; i++) {
            const li = document.createElement('li');
            const img=document.createElement("img");
            img.setAttribute("src", r.data[i].image);

            const title=document.createElement("h3");
            title.textContent = r.data[i].title;
            const p=document.createElement("p");
            p.textContent=r.data[i].description;
            p.setAttribute("class", "color_secondary");

            bookList.appendChild(li);
            li.appendChild(img);
            li.appendChild(title);
            li.appendChild(p);
        }
    })
    .catch(error => console.error(error));
}


   function openCloseNavBar(){
       var x = document.getElementById("burgerLinks");
       if(x.style.display === "flex"){
         x.style.display = "none";
       }
       else{
         x.style.display = "flex";
       }
    }

    retrieveServicesData();