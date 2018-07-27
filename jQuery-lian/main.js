var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px = index * -500
        $('#images').css({
            transform: 'translateX(' + px + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
var timerID = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 1000)
$('.window').on('mouseenter', function () {
    window.clearInterval(timerID)
})
$('.window').on('mouseleave', function () {
    window.setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 1000)
})