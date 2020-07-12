var toggle = document.querySelector('.toggle input')
    // var nav_h = document.querySelector(".navbtns_hamburger")
    // 按鍵事件      
    // $(".toggle input").on('click', function () {
    //     var animate = setInterval(() => {
    //         toggle.checked = !toggle.checked
    //     },3000
    //     )
    // });

    // console.log(myBox.classList.contains("active"))
    
    // 2.在什麼時候
        
    $(".toggle input").click(function(){
        // 按下第n個按鈕,第n個按鈕和分頁要加上active
        var nav_h = document.querySelector(".navbtns_hamburger")
        if (nav_h.classList.contains("active")) {
            nav_h.classList.remove("active")
            console.log("delete active");
        } else {
            nav_h.classList.add("active")
            console.log("add active");
        }
    })
    

    // 初始化
    window.onload = function () {
        lax.setup() // init

        const updateLax = () => {
            lax.update(window.scrollY)
            window.requestAnimationFrame(updateLax)
        }
        window.requestAnimationFrame(updateLax)
    }
    // var menu = document.getElementById('menu');
    // var sc = window.scrollY;
    // $(window).scroll(function () {
    //     $('h2').text($(window).scrollTop());
    // })
    
    // if(sc = "533"){
    //     console.log(sc)
    // }
    
    // var nav_h = document.querySelector(".navbtns_hamburger")
    // window.onscroll = function () {
    //     if( 533 < window.scrollY < 1000){
    //         nav_h.classList.add('colors_b')
    //         nav_h.classList.remove('colors_w')
    //         console.log(window.scrollY);
            
    //     }else{
    //         nav_h.classList.remove('colors_w')
    //         nav_h.classList.add('colors_b')

    //     }
    // }

    