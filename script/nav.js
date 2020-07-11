var toggle = document.querySelector('.toggle input')
        // 按鍵事件      
        $(".toggle input").on('click', function () {
            var animate = setInterval(() => {
                toggle.checked = !toggle.checked
            },3000
        )
});