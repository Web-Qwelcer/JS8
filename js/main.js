let $nav_li = document.querySelectorAll('.nav>li'),
    $subNav = document.querySelectorAll('.subNav'),
    $subNav_li = document.querySelectorAll('.subNav>li'),
    $overlay = document.querySelectorAll('.overlay'),
    $overlay_close = document.querySelector('.close')

for (let i = 0; i < $nav_li.length; i++) {
    $nav_li[i].addEventListener('click', (event)=> {
        $subNav[i].classList.toggle('display')
    })
}

for (let i = 0; i < $subNav_li.length; i++) {
    // $subNav_li[i] = addEventListener('mousemove', (event)=> {
    //     $subNav_li[i].classList.add('hovered')
    // })
    // $subNav_li[i] = addEventListener('mouseout', (event)=> {
    //     $subNav_li[i].classList.remove('hovered')
    // })

    // $subNav_li[i] = addEventListener('click', (event)=> {
    //     event.stopPropagation()
    //     $overlay[i].classList.add('display')
    // })
}

// $overlay_close.addEventListener('click', (event)=> {
//     $overlay.classList.remove('display')
// })
