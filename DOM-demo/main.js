$(clickMe).on('click', function () {
    if (popover.style.display === 'block') {
        $(popover).hide()
    } else {
        $(popover).show()
        $(document).one('click', function () {
            $(popover).hide()
        })
    }
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})

// 理解 DOM 事件
var n = 0
$('div').on('click', function (e) {
    setTimeout(function () {
        $(e.currentTarget).addClass('active')
    }, n * 500)
    n += 1
})