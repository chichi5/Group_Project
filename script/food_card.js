// 酒卡宣告

var fctbtns = document.querySelectorAll('.fct_btn')
var tcards = document.querySelectorAll('.card_style_t')
//肉卡宣告

var fcbbtns = document.querySelectorAll('.fcb_btn')
var bcards = document.querySelectorAll('.card_style_b')

//大卡片宣告
var fullcard = document.querySelectorAll('.card-area-style')

//酒卡按鈕控制酒卡分頁

for (let i = 0; i < fctbtns.length; i++) {
    const fctbtn = fctbtns[i];
    const tcard = tcards[i];
    
    fctbtn.onclick = function(){
        AllclearT()

        fctbtn.classList.add('active')
        tcard.classList.add('active')
    }
}

function AllclearT() {
    for (let i = 0; i < fctbtns.length; i++) {
        const fctbtn = fctbtns[i];
        const tcard = tcards[i];

        fctbtn.classList.remove("active")
        tcard.classList.remove("active")
    }
}

//肉卡按鈕控制肉卡分頁

for (let i = 0; i < fcbbtns.length; i++) {
    const fcbbtn = fcbbtns[i];
    const bcard = bcards[i];
    
    fcbbtn.onclick = function(){
        AllclearB()

        fcbbtn.classList.add('active')
        bcard.classList.add('active')
    }
}

function AllclearB() {
    for (let i = 0; i < fcbbtns.length; i++) {
        const fcbbtn = fcbbtns[i];
        const bcard = bcards[i];

        fcbbtn.classList.remove("active")
        bcard.classList.remove("active")
    }
}

//大卡片圖層效果
for (let i = 0; i < fullcard.length; i++) {
    const fcard = fullcard[i];
   
    fcard.onmouseover = function(){   
        AllclearC()
        fcard.classList.add('active')
    }
}

function AllclearC() {
    for (let i = 0; i < fullcard.length; i++) {
        const fcard = fullcard[i];

        fcard.classList.remove("active")
    }
}