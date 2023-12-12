let preveiwContainer = document.querySelector('.products-preview');
let preveiwBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        preveiwBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if (name == target){
                preview.classList.add('active');
            }
        });
    };
});

preveiwBox.forEach(close =>{
    close.querySelector('.fa-times').onclick =() => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});