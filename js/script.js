const gifsTibia = [
    'img/Assassin Male.gif',
    'img/Barbarian Male.gif',
    'img/Beggar Male.gif',
    'img/Brotherhood Female.gif',
    'img/Brotherhood Male.gif',
    'img/Citizen Male.gif',
    'img/Druid Male.gif',
    'img/Hunter Male.gif',
    'img/Jester Male.gif',
    'img/Knight Male.gif',
    'img/Oriental Male.gif',
    'img/Pirate Male.gif',
    'img/Shaman Male.gif',
    'img/Summoner Male.gif',
    'img/Warrior Male.gif',
    'img/Wizard Male.gif'
]

const cursorTibia = document.querySelectorAll('.tibia')
const imagemTibia = document.querySelector('.sobre__imagem--tibia')

cursorTibia.forEach(elemento => {
   
    elemento.addEventListener("mouseover", function() {
        const aleatorio = Math.floor(Math.random() * 16)
        imagemTibia.src = gifsTibia[aleatorio]
        imagemTibia.style.display = "inline"
    })

    elemento.addEventListener("mouseout", function() {
        imagemTibia.src = ""
        imagemTibia.style.display = "none"
    })

});
