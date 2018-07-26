var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var n = index * -500
        $('#images').css({
            transform: 'translate(' + n + 'px)'
        })
    })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
setInterval(() => {
    n += 1
    allButtons.eq(n % 5).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000)