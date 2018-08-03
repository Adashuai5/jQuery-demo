$(clickMe).on('click', function () {
    $(popover).show()
    $(document).one('click', function () {
        $(popover).hide()
    })
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})

var n = 0
$('div').on('click', function (e) {
    setTimeout(function () {
        $(e.currentTarget).addClass('active')
    }, n * 1000)
    n += 1
})