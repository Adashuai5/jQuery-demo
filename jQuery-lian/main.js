var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px = index * -500
        $('#images').css({
            transform: 'translateX(' + px + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
playSilde(n % size)
var timerId = setTimer()

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function playSilde(index) {
    allButtons.eq(index).trigger('click')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSilde(n % size)
    }, 1000)
}

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    window.setTimer()
})