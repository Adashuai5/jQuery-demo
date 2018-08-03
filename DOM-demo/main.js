$(clickMe).on('click', function () {
    $(popover).show()
})
$(wrapper).on('click', function(e){
    e.stopPropagation()
})
$(document).on('click', function () {
    $(popover).hide()
})