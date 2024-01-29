document.addEventListener('DOMContentLoaded', function() {
    let productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Tải hình ảnh ở định dạng Base64
        let imageUpload = document.getElementById('imageUpload');
        if (imageUpload.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64Image = e.target.result;
                saveProduct(base64Image);
            };
            reader.readAsDataURL(imageUpload.files[0]);
        } else {
            saveProduct(null);
        }
    });
});

// let categoryId = document.getElementById("category");
// let categories = JSON.parse(localStorage.getItem('categories')) || [];
// categories.forEach(category => {
//     // let tr = document.createElement('select');
//     // console.log(Object.values(user));
    
//         let option = document.createElement('option');
       
//         option.textContent = Object.values(category)[1];
//         categoryId.appendChild(option);
    
   
// });

function ProductId() {
    return Math.floor(Math.random() * 99999999 + new Date().getMilliseconds());
}

let date= new Date().toLocaleDateString('vi');
    
function saveProduct(base64Image) {
    let product = {
        id: ProductId(),
        productName: document.getElementById('productName').value,
        price: document.getElementById('price').value,
        productCode: document.getElementById('productCode').value,
        status: document.getElementById('status').value,
        image: base64Image || document.getElementById('image').value,
        category: document.getElementById('category').value,
        date: date,
    };
    let categoryNew = {
        categoryId: product.id,
        category: document.getElementById('category').value,
        categorytName: document.getElementById('productName').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
        product: product,

    }
    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push(categoryNew);
    localStorage.setItem('categories',JSON.stringify(categories));

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Thêm sảm phẩm thành công!');
    document.getElementById('productForm').reset();
}