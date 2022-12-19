import loadPage from './functions/page-loading';

function enableTabSwitching() {
    const tabs = document.querySelectorAll('li[class$="tab"], .menu-button')
    tabs.forEach(tab => tab.addEventListener('click', (e) => {
        loadPage(e.target.classList[0])
        enableTabSwitching()
        markActiveTab(tab)
    }))
}

function markActiveTab(tab) {
    // the argument 'tab' is actually a previous tab element (even after new page has been loaded) 
    // it's the one that was passed to an eventListener
    const newGeneratedTab = document.querySelector(`[class=${tab.classList[0]}]`)
    newGeneratedTab.classList.add("clicked")
}


loadPage("home")
enableTabSwitching()