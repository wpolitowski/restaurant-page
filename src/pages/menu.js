import '../styles/menu.css'
const images = importAll(require.context('../assets/img', false, /\.jpg$/));

function importAll(r) {
    let images = {};
    r.keys().forEach(item => images[item.replace("./", "").replace(".jpg", "")] = r(item) )
    return images;
}

function createMenu() {
    const gridContainer = document.createElement('div')
    const sweetContainer = document.createElement('div')
    const savouryContainer = document.createElement('div')
    const sweetHeader = document.createElement('h2')
    const savouryHeader = document.createElement('h2')

    gridContainer.classList.add('menu-container')
    sweetContainer.classList.add('sweet-container')
    savouryContainer.classList.add('savoury-container')
    sweetHeader.textContent = "Sweet"
    savouryHeader.textContent = "Savoury"

    savouryContainer.append(savouryHeader)
    savouryContainer.append(
        createMenuEntry("guacamole-toasts", 7)
    )
    savouryContainer.append(
        createMenuEntry("pumpkin-spread", 5,50)
    )
    savouryContainer.append(
        createMenuEntry("scrambled-tofu", 6)
    )
    savouryContainer.append(
        createMenuEntry("heart-tartare", 9)
    )
    
    sweetContainer.append(sweetHeader)
    sweetContainer.append(
        createMenuEntry("smoothie-bowl", 6,50)
    )
    sweetContainer.append(
        createMenuEntry("mini-pancakes", 6)
    )
    sweetContainer.append(
        createMenuEntry("chocolate-crêpes", 8)
    )

    gridContainer.append(savouryContainer, sweetContainer)
    document.body.append(gridContainer)
}

function createMenuEntry(name, price) {
    const entryContainer = document.createElement('div')
    const entryNamePrice = document.createElement('div')
    const entryName = document.createElement('p')
    const entryPrice = document.createElement('p')
    const entryImage = document.createElement('img')

    entryContainer.classList.add("menu-entry-container")
    entryNamePrice.classList.add("entry-name-price")

    entryName.textContent = getName(name)
    entryPrice.textContent = `€ ${price}`
    entryImage.src = images[name]

    entryNamePrice.append(entryName, entryPrice)
    entryContainer.append(entryImage, entryNamePrice)

    return entryContainer
}

function getName(name) {
    let result = name.replace("-", " ")
    const pos = result.indexOf(" ")

    result = result.charAt(0).toUpperCase() + result.slice(1, pos + 1) 
        + result.charAt(pos + 1).toUpperCase() + result.slice(pos + 2)

    return result    
}

export default createMenu