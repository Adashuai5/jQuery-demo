var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px = index * -500
        $('#images').css({
            transform: 'translate(' + px + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n = 0
var size = allButtons.length
playSilde(n % size)
var timerId = setTimer()

<<<<<<< HEAD
$('.window').on('mouseenter',function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',function () {
=======
$('.window').mouseenter(function () {
    window.clearInterval(timerId)
})
$('.window').mouseleave(function () {
>>>>>>> cd305677e6159adc797c9ab0072778aafdab302f
    timerId = setTimer()
})

function playSilde(index){
    allButtons.eq(index).trigger('click')
}

function setTimer(){
    return setInterval(() => {
        n += 1
        playSilde(n % size)
    }, 1000)
}
