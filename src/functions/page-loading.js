import createHeader from "../pages/header.js"
import createHomePage from "../pages/home.js"
import createMenu from "../pages/menu.js"
import createContactPage from "../pages/contact.js"

function loadPage(tab) {
    document.body.innerHTML = '';
    createHeader()

    if (tab.includes("home")) createHomePage()
    else if (tab.includes("menu")) createMenu()
    else createContactPage()
}

export default loadPage