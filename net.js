function hambuger() {

    let show = document.querySelector('.sidenav')

    show.style.display = 'block'
}

document.getElementById('hamp').addEventListener('click', hambuger)

function Close() {

    let hide = document.querySelector('.sidenav')

    hide.style.display = 'none'
}

document.getElementById('close').addEventListener('click', Close)