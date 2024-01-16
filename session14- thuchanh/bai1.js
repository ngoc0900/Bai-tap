function isValidEmail(email) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
}
function isPhone(sđt) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(sđt);
}
let stt = 1;
function luu() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let sđt = document.getElementById("sđt").value;
    let address = document.getElementById("address").value;
    let gender = "";
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    // console.log(fullname,email,sđt,address,gender);
    if (_.isEmpty(fullname)) {
        fullname = "";
        document.getElementById("loi").innerHTML = " không được để trống";
    } else if (fullname.length <= 2) {
        fullname = "";
        document.getElementById("loi").innerHTML = " không được nhỏ hơn 2 kí tự";
    }
    else {
        document.getElementById("loi").innerHTML = "";
    }
    if (_.isEmpty(email)) {
        email = "";
        document.getElementById("loi1").innerHTML = " không được để trống";
    } else if (!isValidEmail(email)) {
        email = "";
        document.getElementById("loi1").innerHTML = " Email không đúng định dạng";
    } else {
        document.getElementById("loi1").innerHTML = "";
    }
    if (_.isEmpty(sđt)) {
        sđt = "";
        document.getElementById("loi2").innerHTML = " không được để trống";
    } else if (!isPhone(sđt)) {
        sđt = "";
        document.getElementById("loi2").innerHTML = " sđt không đúng định dạng ở VN";
    } else {
        document.getElementById("loi2").innerHTML = "";
    }
    if (_.isEmpty(address)) {
        address = "";
        document.getElementById("loi3").innerHTML = " không được để trống";
    } else {
        document.getElementById("loi3").innerHTML = "";
    }
    if (_.isEmpty(gender)) {
        gender = "";
        document.getElementById("loi4").innerHTML = " không được để trống";
    } else {
        document.getElementById("loi4").innerHTML = "";
    }
    // document.getElementById("formhv").value = "";
    // if(fullname && email && sđt && address && gender){
    //     console.log(fullname, email, sđt, address, gender);
    // } kiểm tra lại xem ki viết sai có đc in ra không. nếu vẫn in ra thì cần gán lại biến ấy thành rỗng vd: gender = "";
    if (fullname && email && sđt && address && gender) {
        let students = [];
        students.push({
            id: stt,
            fullname: fullname,
            email: email,
            sđt: sđt,
            address: address,
            gender: gender,
        });
        stt ++ ;
        // let trstt = document.getElementsByClassName("stt");
       
        // for (let i = 0; i < trstt.length; i++) {
        //     stt = i + 2;
        // }
        for (let i = 0; i < students.length; i++) {
            document.getElementById("idlist").innerHTML +=
            `<table id="idlist" class="listhv" >
                <tr class="tr">
                    <td class = "stt">${stt}</td>
                    <td>${fullname}</td>
                    <td>${email}</td>
                    <td>${sđt}</td>
                    <td>${address}</td>
                    <td>${gender}</td>
                    <td> 
                        <a href="#" >Edit</a>|<a href="#" class="dlt" onclick= "deleteStudent(${stt })">Delete</a> 
                    </td>
                </tr>
            </table>`
            
        }
    }
}

function deleteStudent(stt) {
  let listDelete =  document.getElementsByClassName("tr");
  listDelete[stt-1].remove();
  let newSTT = document.getElementsByClassName("stt");
  let id = document.getElementsByClassName("dlt");
  for ( let i = 0; i < newSTT.length ; i++) {
    newSTT[i].innerHTML = i + 1;
//     // id.onlcick = `deleteStudent(${i+1})`
//     // id[i].addEventListener("click", deleteStudent(i)) ;
  }
}
