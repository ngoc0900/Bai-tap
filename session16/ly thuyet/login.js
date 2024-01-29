let mang = JSON.parse(localStorage.getItem("mang")) || [];
function dangki(e) {
    e.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].email === email) {
            alert("tài khoản này đã được đăng kí");
            return;
        }
    }
    let user = {
        fullname: fullname,
        email: email,
        password: password,
    };
    mang.push(user);
    localStorage.setItem("mang", JSON.stringify(mang));
    window.location.href ="login1.html"
}
function dangnhap(e) {
    e.preventDefault();
    console.log(123);
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;
    let login = false;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].email === email && mang[i].password === password) {
            login = true;
            window.location.href = "index.html"
        }
    } 
    if (!login) {
        alert("email hay mật khẩu không chính xác")
    }
}