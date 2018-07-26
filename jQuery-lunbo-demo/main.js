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
allButtons.eq(n % 5).trigger('click')
setInterval(() => {
    n += 1
    allButtons.eq(n % 5).trigger('click')
}, 1000)