// Learn More = Links to hof.html
document.getElementById("learn-more").addEventListener("click", () => {
  window.location.href = "./hof.html";
});
//game-card
const cards = {
  dnd: {
    image: 'images/Index/dnd.png',
    header: 'Dungeons & Dragons',
    text: 'This is the most popular (ttrpg) tabletop role-playing game out there.' +
    ' This is a beginner friendly system, and our Dungeon Masters use the current 2024 rules.' +
    ' Look on our campaign page to find your next Dungeons & Dragons adventure.'
  },
  cthulhu: {
    image: '',
    header: 'Call of Cthulhu',
    text: 'A game of cosmic horror, mystery, and investigation.'
  },
  shadowdark: {
    image: '',
    header: 'Shadowdark RPG',
    text: 'A modern rules-light dungeon crawler inspired by classic fantasy adventures.'
  }
};

function updateCard(card) {
  if (!card) return;

  document.getElementById('game-header').textContent = card.header;
  document.getElementById('game-text').textContent = card.text;

  const img = document.getElementById('game-image');
  img.src = card.image;
  img.style.display = 'block'; // show image
}

document.querySelectorAll('.feature-btn').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.card;
    updateCard(cards[key]);
  });
});