/**
 * bước 1 mỗi lần ấn vào add thì thu đc giá trị nhập vào từ ô input
 * bước 2 giá trị thu dc đc update vào trong to do list  
 * bước 3 xoá
 */

function add() {
    // khai báo element input
    let input = document.getElementById("todo");
    let todo = input.value;
    console.log(todo);
    if(todo == ""){
        alert("Hãy nhập lại");
    } else {
        // bước 2 giá trị thu dc đc update vào trong to do list  
        let list = document.getElementById("list");
        // tạo một tag li để thêm vào list
        let li = document.createElement('li');
        //  gán giá trị thu đc vào thẻ li này
        li.textContent = todo;
        // let span = document.createElement('span');
        // span.textContent = todo;
        // li.appendChild(span);
        //  (chức năng xoá)
        let x = document.createElement("button");
        x.textContent = "X";
        x.setAttribute('id', 'eraser');
        x.onclick = function() {
            li.remove();
        }
        li.appendChild(x)
        // thêm thẻ li vào list
        list.appendChild(li);
        //  xoá giá trị đã nhập vào từ trong input
         input.value = "";

    }
}
    //  chức năng update
    let list = document.getElementById("list");
    list.addEventListener('click', (a) => {
        if (a.target.tagName === "LI") {
            a.target.classList.toggle("delete")
            console.log(a.target);
        }
    })
    


