import '../styles/home.css'

function createHomepage() {
    const container = document.createElement('div')
    const homeInfo = document.createElement('div')
    const h2 = document.createElement('h2')
    const para = document.createElement('p')
    const para2 = document.createElement('p')
    const menuBtn = document.createElement('button')

    container.classList.add('container')
    homeInfo.classList.add('home-info')
    menuBtn.classList.add('menu-button')
    clickListener(menuBtn)
    h2.textContent = "Hi there!"
    para.textContent = "Welcome to the place where all your dreams come true"
    para2.textContent = "...as long as they are vegan ones 😉"
    menuBtn.textContent = "Alright, let's go!"

    homeInfo.append(h2, para, para2, menuBtn)
    container.appendChild(homeInfo)
    document.body.append(container)
}

function clickListener(element) {
    element.addEventListener('click', () => {
        element.classList.add('clicked')
    })
}

export default createHomepage