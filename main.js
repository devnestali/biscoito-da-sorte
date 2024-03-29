/* VARIÁVEIS */
const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")
const handleTryClick = document.querySelector(".handleTryClick")
const handleResetClick = document.querySelector(".handleResetClick")

const phrases = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

/* EVENTOS */
handleTryClick.addEventListener('click', handleScreen1)

handleResetClick.addEventListener('click', handleScreen2)

document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains("hide")){
    handleScreen1()
  } else if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleScreen2()    
  }
})

/* CALLBACKS */
function handleScreen1() {
  toggleScreen()
  catchPhrase()
}

function handleScreen2() {
  toggleScreen()
}

function catchPhrase () {
  let allPhrases = phrases.length
  let randomNumber = Math.floor(Math.random() * allPhrases)
  screen2.querySelector("p").innerText = `${phrases[randomNumber]}`
}

function toggleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

