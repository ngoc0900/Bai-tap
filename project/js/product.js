document.addEventListener('DOMContentLoaded', function () {
    let ordersTable = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
    let prevPageButton = document.getElementById('prevPage');
    let nextPageButton = document.getElementById('nextPage');
    let currentPageSpan = document.getElementById('currentPage');
    
    let currentPage = 1;
    let ordersPerPage = 10; // 1ページあたりのオーダー数
    // let pages = Math.ceil(orders.length / ordersPerPage)
    // for (let i = 0; i < pages; i++) {
    //     html +=
    //         `
    //              <li>
    //                 <button onclick=choosePage(${i})>${i+1}</button>
    //             </li> 
    //         `
    // }
    // let page = document.get

    
    let orders = JSON.parse(localStorage.getItem('products')) || []; // ローカルストレージからオーダーを取得

    function updateTable() {
        ordersTable.innerHTML = ''; // テーブルをクリア
        let pageOrders = orders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);
        
        // テーブルにオーダーを追加
        
        pageOrders.forEach((order, index) => {
            let row = ordersTable.insertRow(index);
            row.insertCell(0).innerText = order.id;
            row.insertCell(1).innerText = order.productName;
            row.insertCell(2).innerText = order.status;
            row.insertCell(3).innerText = order.category;
            row.insertCell(4).innerText = order.price;
            row.insertCell(5).innerText = order.date;
            

            let actionCell = row.insertCell(6);
            let updateButton = document.createElement('button');
            updateButton.innerText = 'Edit';
            updateButton.addEventListener('click', function() {
                window.location.href="add_Product.html";
                
                updateOrderStatus(order.id);
            });
            actionCell.appendChild(updateButton);

            let deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteOrder(order.id);
            });
            actionCell.appendChild(deleteButton);
        });

        currentPageSpan.innerText = currentPage;
    }
    let idEdit1 = -1;
    function updateOrderStatus(orderId) {
        // ステータス更新処理
        let productInfo;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].id == orderId) {
                productInfo = orders[i];
                idEdit1 = productInfo.id;
                break;
            }
        console.log(`Updating status for order ${orderId}`);
        // ここにステータス更新のロジックを実装
        
        }
        
    }

    function deleteOrder(orderId) {
        // オーダー削除処理
        console.log(`Deleting order ${orderId}`);
        orders = orders.filter(order => order.id !== orderId);
        updateTable();
    }

    // ページネーションの処理
    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });
    nextPageButton.addEventListener('click', function() {
        if ((currentPage * ordersPerPage) < orders.length) {
            currentPage++;
            updateTable();
        }
    });

    updateTable();
});