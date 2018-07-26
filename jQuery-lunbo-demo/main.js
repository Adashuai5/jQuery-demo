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