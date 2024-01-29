let users = [];
// {id: 123 ,name: anh}
function uuid() {
    return Math.floor(Math.random() * 99999999 + new Date().getMilliseconds());
}
function isValidEmail(email) {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}
function isPhone(phone) {
    return /^\d{10}$/.test(phone);
}
function resetForm(){document.getElementById("group").value =
    document.getElementById("fullname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("telnumber").value = "";
    document.getElementById("marks").value ="";
    document.getElementById("nangluc").value= "";
    "";
    let genders = document.getElementsByClassName("gender");
            for (let i = 0; i < genders.length; i++) {
                genders[i].checked = false
            };
}
function dangnhap() {
    let isValid = true;
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("telnumber").value;
    let diem = document.getElementById("marks").value;
    let nangluc = document.getElementById("nangluc").value;
    let group = document.getElementById("group").value;
    let gender = "";
    if(document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }

    if(_.isEmpty(name)) {
        document.getElementById("loi1").innerHTML = "氏名を入力して。";
        isValid = false;
    } else {
        document.getElementById("loi1").innerHTML = "";
    }

    if(_.isEmpty(email)) {
        document.getElementById("loi2").innerHTML = "メールを入力して。";
    } else if(!isValidEmail(email)) {
        document.getElementById("loi2").innerHTML = "メールを正しいに入力して。 ";
    } else {
        document.getElementById("loi2").innerHTML = "";
    }

    if(_.isEmpty(phone)) {
        document.getElementById("loi3").innerHTML = "電話番号を入力して。";
    } else if(!isPhone(phone)){
        document.getElementById("loi3").innerHTML = "電話番号を正しいに入力して。";
    } else {
        document.getElementById("loi3").innerHTML = "";
    }

    if(_.isEmpty(diem)) {
        document.getElementById("loi4").innerHTML = "電話番号を入力して。";
    } else {
        document.getElementById("loi4").innerHTML = "";
    }
    
    if (isValid) {
        if(idEdit1 == -1) {
            let user = {
                id: uuid(),// id: 123
                name: name, // anh
                email: email,
                phone: phone,
                diem: diem,
                gender: gender,
                group: group,
                nangluc: nangluc,
            };
            users.push(user);
            console.log(users); 
            
        } else {
            let user = {
                id: idEdit1,
                name: name,
                email: email,
                phone: phone,
                diem: diem,
                gender: gender,
                group: group,
                nangluc: nangluc,
            };
            for (let i = 0; i < users.length; i++) // sau khi xửa xong thì sẽ tìm trong mảng xem có thàng nào là id 123 thì xoá đi và thay thế lại chỗ cũ
                if(users[i].id== idEdit1){
                    users.splice(i,1,user);
                }
                idEdit1= -1;  // sau khi sửa xong thì hết nhiệm vụ và cần phải trả về giá trị mặc định (để có thể thêm một đối tượng mới)
                resetForm();
        }
        render(users)
    }  
}
function render(mangmoi) { // mangmoi là tham số nhận giá trị từ đối số  
    let elm = `<tr>
                <td>STT</td>
                <td>ID</td>
                <td>氏名</td>
                 <td>性別</td>
                <td>グループ</td>
                <td>メールアドレス</td>
                 <td>電話番号</td>
                <td>日本語能力</td>
                <td>点数</td>
                <td>アクション</td>
            </tr>`;

            for (let i = 0; i < mangmoi.length; i++) {
                elm +=
            `<tr>
                <td>${i + 1}</td>
                <td>${mangmoi[i].id}</td>
                <td>${mangmoi[i].name}</td>
                <td>${mangmoi[i].gender}</td>
                <td>${mangmoi[i].group}</td>
                <td>${mangmoi[i].email}</td>
                <td>${mangmoi[i].phone}</td>
                <td>${mangmoi[i].nangluc}</td>
                <td>${mangmoi[i].diem}</td>
                <td >
                    <button  onclick=editUser(${mangmoi[i].id})>edit</button> /*123*/
                    <button onclick=deleteUser(${mangmoi[i].id})> delete</button>
                </td>
            </tr>`
            }
            document.getElementById("list-user").innerHTML=elm;
            // resetForm();

}
function deleteUser (id) {
    let deleteAccess = confirm("bạn có chắc chắn muốn xoá không");
            if (!deleteAccess) {
                return
            }for (let i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    deleteIndex = i;
                }
            }
            users.splice(deleteIndex, 1);
            render(users);
}
let idEdit1= -1;
function editUser (idEdit) { // idEdit = ${users[i].id} = 123
    let userInfo;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == idEdit) {
            userInfo = users[i];
            idEdit1 = userInfo.id;
            break;
        }
    }
    // userInfo = {id: 123 , name : anh } idEdit1 =123
    // console.log("userInfo", userInfo);
    document.getElementById("fullname").value = userInfo.name; //  xửa tên thành(name = binh) xong rồi bấm lưu mà núi lưu đang là nút đă nhập 
    document.getElementById("mail").value = userInfo.email;
    document.getElementById("telnumber").value = userInfo.phone;
    document.getElementById("marks").value = userInfo.diem;
    document.getElementById("nangluc").value = userInfo.nangluc;
    document.getElementById("group").value = userInfo.group;
    let gender = document.getElementsByClassName("gender");

            if (userInfo.gender == "nam") {
                gender[0].checked = true;
            } else {
                gender[1].checked = true;
            }
}

function timKiem() {
    let mang = [];
    let tk = document.getElementById("seach").value;
    for( let i = 0; i < users.length ; i++) {
        if(users[i].name.toLowerCase().includes(tk.toLowerCase())) {
            mang.push(users[i]);
        }
    }
    render(mang);

}
