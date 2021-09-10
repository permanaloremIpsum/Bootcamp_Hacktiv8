let inputName = document.querySelector('#inputName')
let inputRole = document.querySelector('#inputRole')
let inputAvaliability = document.querySelector('#inputAvaliability')
let inputAge = document.querySelector('#inputAge')
let inputLocation = document.querySelector('#inputLocation')
let inputExperience = document.querySelector('#inputExperience')
let inputEmail = document.querySelector('#inputEmail')

let nama = document.querySelector('#name')
let role = document.querySelector('#role')
let avaliability = document.querySelector('#avaliability')
let age = document.querySelector('#age')
let lokasi = document.querySelector('#location')
let experience = document.querySelector('#experience')
let email = document.querySelector('#email')

let btnEdit = document.querySelector('#btn-edit')
let btnSubmit = document.querySelector('#btn-submit')
let formPortfolio = document.querySelector('#form-portfolio')

let objReg = {
    regNama: false,
    regRole: false,
    regAvaliability: false,
    regAge: false,
    regLokasi: false,
    regExperience: false,
    regEmail: false
}

let checkRegButton = () => {
    if(!objReg.regNama || !objReg.regRole || !objReg.regAvaliability || !objReg.regAge || !objReg.regLokasi || !objReg.regExperience || !objReg.regEmail){
        btnSubmit.disabled = true
    }else{
        btnSubmit.disabled = false
    }
}

checkRegButton()

// Check Regex Input Type Text
let checkRegText = (event) => {
    let elementText = event.target.value
    let textReg = /^[a-zA-Z\s]+$/
    let resultReg = textReg.test(elementText)
    return resultReg
}

// Check Regex Input Type Number
let checkRegNumber = (event) => {
    let elementText = event.target.value
    let textReg = /^\d+$/
    let resultReg = textReg.test(elementText)
    return resultReg
}

// Check Regex Input Type Email
let checkRegEmail = (event) => {
    let elementText = event.target.value
    let textReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let resultReg = textReg.test(elementText)
    return resultReg
}

// Display Information Input Text
let displayInfoText = (element, reg) => {
    let textSmall = element.nextSibling.nextSibling.nextSibling
    if(!reg){
        element.classList.remove("input-success")
        element.classList.add("input-error")
        textSmall.innerHTML = "Input must letters !!!"
    }else{
        element.classList.remove("input-error")
        element.classList.add("input-success")
        textSmall.innerHTML = ""
    }
}

// Display Information Input Number
let displayInfoNumber = (element, reg) => {
    let textSmall = element.nextSibling.nextSibling.nextSibling
    if(!reg){
        element.classList.remove("input-success")
        element.classList.add("input-error")
        textSmall.innerHTML = "Input must Number !!!"
    }else{
        element.classList.remove("input-error")
        element.classList.add("input-success")
        textSmall.innerHTML = ""
    }
}

// Display Information Input Email
let displayInfoEmail = (element, reg) => {
    let textSmall = element.nextSibling.nextSibling.nextSibling
    if(!reg){
        element.classList.remove("input-success")
        element.classList.add("input-error")
        textSmall.innerHTML = "Please include an '@'. ex: dede@gmail.com "
    }else{
        element.classList.remove("input-error")
        element.classList.add("input-success")
        textSmall.innerHTML = ""
    }
}

inputName.addEventListener("input", (e) => {
    let textReg = checkRegText(e)
    displayInfoText(inputName, textReg)
    objReg.regNama = textReg
    checkRegButton()
})

inputRole.addEventListener("input", (e) => {
    let textReg = checkRegText(e)
    displayInfoText(inputRole, textReg)
    objReg.regRole = textReg
    checkRegButton()
})

inputAvaliability.addEventListener("input", (e) => {
    let textReg = checkRegText(e)
    displayInfoText(inputAvaliability, textReg)
    objReg.regAvaliability = textReg
    checkRegButton()
})

inputLocation.addEventListener("input", (e) => {
    let textReg = checkRegText(e)
    displayInfoText(inputLocation, textReg)
    objReg.regLokasi = textReg
    checkRegButton()
})

inputAge.addEventListener("input", (e) => {
    let textReg = checkRegNumber(e)
    displayInfoNumber(inputAge, textReg)
    objReg.regAge = textReg
    checkRegButton()
})

inputExperience.addEventListener("input", (e) => {
    let textReg = checkRegNumber(e)
    displayInfoNumber(inputExperience, textReg)
    objReg.regExperience = textReg
    checkRegButton()
})

inputEmail.addEventListener("input", (e) => {
    let textReg = checkRegEmail(e)
    displayInfoEmail(inputEmail, textReg)
    objReg.regEmail = textReg
    checkRegButton()
})

let tampilkanData = () => {
    inputName.value = nama.innerHTML
    inputRole.value = role.innerHTML
    inputAvaliability.value = avaliability.innerHTML
    inputAge.value = age.innerHTML
    inputLocation.value = lokasi.innerHTML
    inputExperience.value = experience.innerHTML
    inputEmail.value = email.innerHTML

    objReg.regNama = true
    objReg.regRole = true
    objReg.regAvaliability = true
    objReg.regAge = true
    objReg.regLokasi = true
    objReg.regExperience = true
    objReg.regEmail = true
    checkRegButton()
}

let simpanForm = (e) => {
    e.preventDefault()

    nama.innerHTML = inputName.value
    role.innerHTML = inputRole.value
    avaliability.innerHTML = inputAvaliability.value
    age.innerHTML = inputAge.value
    lokasi.innerHTML = inputLocation.value
    experience.innerHTML = inputExperience.value
    email.innerHTML = inputEmail.value

    alert("Data Berhasil Diubah!!")
    window.scroll({ top: 0, behavior: 'smooth' });
}

btnEdit.addEventListener("click", tampilkanData)
formPortfolio.addEventListener("submit", simpanForm)