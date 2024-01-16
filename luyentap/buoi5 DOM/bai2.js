function showTime() {
    let date= new Date();
    document.getElementById("time").innerText = date.toLocaleTimeString();
}

function thayDoi () {
    let date= new Date();
    document.getElementById("change").innerText = `Chào mừng đến với rikkei academy, ${date.getFullYear()}`
}
setInterval(showTime, 1000);
setTimeout(thayDoi,1000);
function thayDoiMau(){
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    var texts = ['Thử thách bản thân với javascript',
                'Luôn luôn nỗ lực',
                'Luôn luôn cố gắng',
                'Không sợ khó khăn',
                'Luôn luôn được support tận tình',
                "Luôn luôn đồng hành"];
    var randumIndex = Math.floor(Math.random()* colors.length);
    return [colors[randumIndex],texts[randumIndex]];

}
function change(){
    let changeColorAndText = thayDoiMau();
    document.getElementById("h2").style.background = changeColorAndText[0];
    document.getElementById("h2").innerText = changeColorAndText[1];
    let liElements = document.getElementsByTagName("li");
    for (let i = 0; i< liElements.length ; i++) {
        liElements[i].style.background = thayDoiMau()[0];
    }
    document.getElementById("time").style.background = changeColorAndText[0];
    document.getElementById("change").style.color = changeColorAndText[0];
}
setInterval(change,1000);
