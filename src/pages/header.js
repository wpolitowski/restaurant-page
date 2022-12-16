import '../styles/header.css'

function createHeader() {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const ul = document.createElement('ul')
    const homeTab = document.createElement('li')
    const menuTab = document.createElement('li')
    const contactTab = document.createElement('li')

    header.classList.add("header")

    h1.textContent = "Vegan Dream"
    homeTab.textContent = "Home"
    menuTab.textContent = "Menu"
    contactTab.textContent = "Contact"

    ul.append(homeTab, menuTab, contactTab)
    header.append(h1, ul)
    document.body.appendChild(header)
}

export default createHeader