// Learn More = Links to hof.html
document.getElementById("learn-more").addEventListener("click", () => {
  window.location.href = "./hof.html";
});
//game-card
const cards = {
  dnd: {
    image: 'images/Index/dnd.png',
    header: 'Dungeons & Dragons',
    text: `Dungeons & Dragons is the world\'s most popular tabletop role-playing game in the world.
          It\'s a beginner-friendly system, and our Dungeon Master runs the updated 2024 Ruleset.
          This TTRPG offers a rich mix of combat, roleplay, and exploration, set across countless 
          adventures in the Forgotten Realms — or entirely original homebrew worlds.`
  },
  cthulhu: {
    image: 'images/Index/coc.png',
    header: 'Cosmic Horror TTRPG',
    text: `Call of Cthulhu is a classic tabletop role-playing game of investigation and cosmic dread.
           Players take on the roles of investigators who uncover forbidden knowledge, confront otherworldly 
           horrors, and struggle to keep their sanity. The game emphasizes atmosphere, mystery, and storytelling 
           over straight combat, offering tense, narrative-driven adventures set in the 1920s, modern day, and 
           many eerie homebrew settings.`
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