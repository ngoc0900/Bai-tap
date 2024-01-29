document.addEventListener('DOMContentLoaded', function () {
    let ordersTable = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
    let prevPageButton = document.getElementById('prevPage');
    let nextPageButton = document.getElementById('nextPage');
    let currentPageSpan = document.getElementById('currentPage');
    
    let currentPage = 1;
    let ordersPerPage = 10; 
    
    let categoryId = JSON.parse(localStorage.getItem('categories')) || []; // ローカルストレージからオーダーを取得

    function updateTable() {
        ordersTable.innerHTML = ''; // テーブルをクリア
        let pageOrders = categoryId.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);
        
        // テーブルにオーダーを追加
        
        pageOrders.forEach((category, index) => {
            let row = ordersTable.insertRow(index);
            row.insertCell(0).innerText = category.category;
            row.insertCell(1).innerText = category.categorytName;
            row.insertCell(2).innerText = category.description;
            row.insertCell(3).innerText = category.status;
            row.insertCell(4).innerText = category.product;
            
        });

        currentPageSpan.innerText = currentPage;
    }
    
    // ページネーションの処理
    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });
    nextPageButton.addEventListener('click', function() {
        if ((currentPage * ordersPerPage) < categoryId.length) {
            currentPage++;
            updateTable();
        }
    });

    updateTable();
});