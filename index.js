function retrieveServicesData(){
    fetch('https://fakerapi.it/api/v1/books')
    .then(response => response.json())
    .then(r => {
        const bookList = document.getElementById('book-list');

        for (i = 0; i < 6; i++) {
            const li = document.createElement('li');
            const img=document.createElement("img");
            img.setAttribute("src", r.data[i].image);

            const title=document.createElement("a");
            title.href="javascript:void(0)";
            title.style.textDecoration = "none";
            title.id = i;
            title.onclick = function jsFunc() {
                const modal = document.getElementById("modal");
                modal.style.display = "flex";
                const modalWrapper = document.getElementById("modal_wrapper");
                modalWrapper.style.display = "flex";
                const id = title.id;

                const modalTitle = document.createElement("h3")
                modalTitle.textContent = r.data[id].title;
                
                modalImage = document.createElement("img");
                modalImage.setAttribute("src", r.data[id].image);

                modalDescription = document.createElement("p");
                modalDescription.textContent = r.data[id].description;

                modalExit = document.createElement("a");
                modalExit.textContent = "x";
                modalExit.onclick =  function close() {
                    modal.style.display = "none";
                    modalWrapper.style.display = "none";
                    modal.innerHTML = '';
                }

                modal.appendChild(modalExit);
                modal.appendChild(modalTitle);
                modal.appendChild(modalImage);
                modal.appendChild(modalDescription);
            }
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