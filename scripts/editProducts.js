(function() {
    const items = document.querySelectorAll('.item');

    (function deleteProduct() {

        for(let item of items) {
            const deleteButtonHref = document.createElement('a');
            deleteButtonHref.className = 'delete-card';
            deleteButtonHref.setAttribute('href', '#');
            deleteButtonHref.addEventListener('click', ()=>{
                item.remove()
            })
    
            const deleteButton = document.createElement('i');
            deleteButton.className = 'fas fa-times';
            deleteButtonHref.append(deleteButton);

            item.append(deleteButtonHref);
        }
    })()

    (function addProduct() {
        
    })()
})()