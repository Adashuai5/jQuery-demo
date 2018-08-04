let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
makeFakeSlides()
$slides.css({
    transform: 'translateX(-500px)'
})
bindEvents()


function bindEvents(){
    let current = 0
$buttons.eq(0).on('click', function () {
    if (current === 4) {
        $slides.css({
                transform: 'translateX(-3000px)'
            })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({
                        transform: 'translateX(-500px)'
                    })
                    .show()
            })
    } else {
        $slides.css({
            transform: 'translateX(-500px)'
        })
        current = 0
    }
})
$buttons.eq(1).on('click', function () {
    $slides.css({
        transform: 'translateX(-1000px)'
    })
    current = 1
})
$buttons.eq(2).on('click', function () {
    $slides.css({
        transform: 'translateX(-1500px)'
    })
    current = 2
})
$buttons.eq(3).on('click', function () {
    $slides.css({
        transform: 'translateX(-2000px)'
    })
    current = 3
})
$buttons.eq(4).on('click', function () {
    if (current === 0) {
        $slides.css({
                transform: 'translateX(0px)'
            })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({
                        transform: 'translateX(-2500px)'
                    })
                    .show()
            })
    } else {
        $slides.css({
            transform: 'translateX(-2500px)'
        })
        current = 4
    }
})
}

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}