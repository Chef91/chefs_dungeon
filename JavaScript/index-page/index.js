

document.getElementByid("learn-more").addEventListener("click", () => {
  window.location.href = "./hof.html";
})

// Not working - learn more = goes to hof game page

//game-card
function updateCard(imageSrc, text) {
  document.getElementById('game-header').innerHTML = profile.header;
  document.getElementById('game-text').innerHTML = profile.text;
}
//cards
const cards = {
  cardDND: {
    header: 'Dungeons & Dragons',
    
  }
}