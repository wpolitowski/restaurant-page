import '../styles/contact.css'

const icons = importAll(require.context('../assets/img', false, /(\.svg$|map\.png)/));

function importAll(r) {
    let images = {};
    r.keys().forEach(item => images[item.replace("./", "").replace(/\.svg|\.png/, "")] = r(item) )
    return images;
}

function createContactPage() {
    const container = document.createElement('div')
    const contactInfoContainer = document.createElement('div')
    const mapImage = document.createElement('img')

    container.classList.add("contact-container")
    contactInfoContainer.classList.add("contact-section-container")
    mapImage.src = icons["map"]

    contactInfoContainer.append(
        createContactSection("pin", "Estkowskiego 42, 61-755 Poznań")
    )
    contactInfoContainer.append(
        createContactSection("time", "Tuesday–Friday 1pm–10pm\nSaturday–Sunday 1pm–12am")
    )
    contactInfoContainer.append(
        createContactSection("phone", "+48 909 808 707 303")
    )
    contactInfoContainer.append(
        createContactSection("mail", "contact@vegandream.go")
    )

    container.append(contactInfoContainer, mapImage)
    document.body.append(container)
}

function createContactSection(name, info) {
    const section = document.createElement('div')
    const icon = document.createElement('img')
    const infoPara = document.createElement('p')

    section.classList.add('contact-section')
    icon.src = icons[name]
    infoPara.textContent = info    

    section.append(icon, infoPara)
    return section
}

export default createContactPage