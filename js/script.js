const cursorTibia = document.querySelector('#tibia')
const imagemTibia = document.querySelector('.sobre__imagem--tibia')

cursorTibia.addEventListener("mouseover", function() {
    imagemTibia.style.display = "inline"
})

cursorTibia.addEventListener("mouseout", function() {
    imagemTibia.style.display = "none"
})