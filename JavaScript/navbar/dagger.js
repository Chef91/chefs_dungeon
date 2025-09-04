document.querySelectorAll('.nav-link').forEach(link => {
  const span = link.querySelector('.link-text');

  link.addEventListener('mouseenter', () => {
    // create dagger image only if not already there
    if (!link.querySelector('.dagger')) {
      const img = document.createElement('img');
      img.src = './images/navbar/dagger.png'; // your dagger file
      img.classList.add('dagger');
      link.prepend(img); // place before text
      // force reflow so transition triggers
      requestAnimationFrame(() => { img.style.opacity = 1; });
    }
  });

  link.addEventListener('mouseleave', () => {
    const img = link.querySelector('.dagger');
    if (img) {
      img.style.opacity = 0;
      // remove after fade out
      setTimeout(() => img.remove(), 250);
    }
  });
});