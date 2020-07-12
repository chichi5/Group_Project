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