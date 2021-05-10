let $nav_li = document.querySelectorAll('.nav > li'),
    $subNav = document.querySelectorAll('.subNav'),
    $subNav_li = document.querySelectorAll('.subNav > li'),
    $overlay = document.getElementById('overlay'),
    $overlay_close = document.getElementById('close'),
    overlayArticles = document.querySelectorAll('#overlay > article')

let iCurrentOverlay = 0;

for (let i = 0; i < $nav_li.length; i++) {
    $nav_li[i].addEventListener('click', (event)=> {
        $subNav[i].classList.toggle('display')
    })
}

for (let i = 0; i < $subNav_li.length; i++) {
    const currentSubNav = $subNav_li[i];

    currentSubNav.addEventListener('mousemove', (event)=> {
        currentSubNav.classList.add('hovered')
    });

    currentSubNav.addEventListener('mouseout', (event)=> {
        currentSubNav.classList.remove('hovered')
    })

    currentSubNav.addEventListener('click', (event) => {
        event.stopPropagation();

        const modalWindow = Number.parseInt(currentSubNav.getAttribute('modal-data'));
        
        if (modalWindow >= 0) {
            $overlay.classList.add('shown');
            overlayArticles[iCurrentOverlay].classList.remove('display');
            overlayArticles[modalWindow].classList.add('display');
            iCurrentOverlay = modalWindow;
        }
    })
}

$overlay.addEventListener('click', (event) => {
   event.target.classList.remove('shown');
}, false);

$overlay_close.addEventListener('click', (event)=> {
    $overlay.classList.remove('shown')
})
