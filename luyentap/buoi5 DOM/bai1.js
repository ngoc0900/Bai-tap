function nhapVao() {
    document.getElementById("khoi").innerHTML = '';
    let giaTri = document.getElementById("input").value;
    if (giaTri == '') {
        document.getElementById("trong").innerText = "Hãy nhập một chữ số vào input"
    } else if (isNaN(giaTri)) {
        document.getElementById("trong").innerText = "Hãy nhập một chữ số vào input"
    } else if (giaTri <= 0) {
        document.getElementById("trong").innerText = "Hãy nhập một chữ số lớn hơn 0"
    } else {
        document.getElementById("trong").innerText = ''
        for (let i = 1; i <= giaTri; i++) {
            // document.getElementById("khoi").innerHTML +=  ` <div class="box le">${i}</div>`
            if (sNt(i)) {
                document.getElementById("khoi").innerHTML += ` <div class="box snt">${i}</div>`
            }
            else if (i % 2 == 0) {
                document.getElementById("khoi").innerHTML += ` <div class="box chan">${i}</div>`
            } else {
                document.getElementById("khoi").innerHTML += ` <div class="box le">${i}</div>`
            }
        }
        document.getElementById("input").value = '';
    }
}
function sNt(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}