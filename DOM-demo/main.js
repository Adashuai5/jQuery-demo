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
let divs = $('div').get()
let n = 0
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.add('active')
    }, n * 500)
    n += 1
  }, true)
}


for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.remove('active')
    }, n * 500)
    n += 1
  })
}