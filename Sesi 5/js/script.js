let tampilkanData = () => {
    let name = document.querySelector('#name').innerHTML
    let role = document.querySelector('#role').innerHTML
    let avaliability = document.querySelector('#avaliability').innerHTML
    let age = document.querySelector('#age').innerHTML
    let location = document.querySelector('#location').innerHTML
    let experience = document.querySelector('#experience').innerHTML
    let email = document.querySelector('#email').innerHTML

    let inputName = document.querySelector('#inputName')
    let inputRole = document.querySelector('#inputRole')
    let inputAvaliability = document.querySelector('#inputAvaliability')
    let inputAge = document.querySelector('#inputAge')
    let inputLocation = document.querySelector('#inputLocation')
    let inputExperience = document.querySelector('#inputExperience')
    let inputEmail = document.querySelector('#inputEmail')

    inputName.value = name
    inputRole.value = role
    inputAvaliability.value = avaliability
    inputAge.value = age
    inputLocation.value = location
    inputExperience.value = experience
    inputEmail.value = email
}

let simpanForm = (e) => {
    e.preventDefault()

    let inputName = document.querySelector('#inputName').value
    let inputRole = document.querySelector('#inputRole').value
    let inputAvaliability = document.querySelector('#inputAvaliability').value
    let inputAge = document.querySelector('#inputAge').value
    let inputLocation = document.querySelector('#inputLocation').value
    let inputExperience = document.querySelector('#inputExperience').value
    let inputEmail = document.querySelector('#inputEmail').value

    let name = document.querySelector('#name')
    let role = document.querySelector('#role')
    let avaliability = document.querySelector('#avaliability')
    let age = document.querySelector('#age')
    let location = document.querySelector('#location')
    let experience = document.querySelector('#experience')
    let email = document.querySelector('#email')

    name.innerHTML = inputName
    role.innerHTML = inputRole
    avaliability.innerHTML = inputAvaliability
    age.innerHTML = inputAge
    location.innerHTML = inputLocation
    experience.innerHTML = inputExperience
    email.innerHTML = inputEmail

    alert("Data Berhasil Diubah!!")
    window.scroll({ top: 0, behavior: 'smooth' });
}

let btnEdit = document.querySelector('#btn-edit')
let formPortfolio = document.querySelector('#form-portfolio')

btnEdit.addEventListener("click", tampilkanData)
formPortfolio.addEventListener("submit", simpanForm)