import dayjs from 'dayjs';
export { intro, cardGame, pageListListeners };

const intro = () => {
  return `
    <aside class="intro">
      <h1>Welcome,</h1>
      <p>
        The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame,
        the video game industry's top talents pack the Los Angeles Convention Center, connecting tens of thousands of the best,
        brightest, and most innovative int the interactive entertainment industry. For three exciting days, leading-edge companies,
        groundbreaking new technologies, and never-before-seen products will be showcased? The Hyper Progame connects you
        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.
      </p>
      <p> <br> This fictionnal demo project has been coded in pure JavaScript and SCSS (Vanilla JS + Sass) over 3 days of alone-work.</p>
    </aside>
  `;
};

const cardGame = (game) => {
  const { id, background_image, name, platforms } = game;
  
  const getPlatformLogo = (platform) => {
   if (platform.platform.name.includes('Xbox')) return '<img src="./src/assets/images/logos/xbox.svg">'
   if (platform.platform.name.includes('PlayStation')) return '<img src="./src/assets/images/logos/ps4.svg">'
   if (platform.platform.name.includes('Switch')) return '<img src="./src/assets/images/logos/switch.svg">'
   if (platform.platform.name.includes('PC')) return '<img src="./src/assets/images/logos/windows.svg">'
   if (platform.platform.name.includes('Linux')) return '<img src="./src/assets/images/logos/linux.svg">'
   if (platform.platform.name.includes('Android')) return '<img src="./src/assets/images/logos/mobile.svg">'
  }

  return `
  <article id="${id}" class="cardGame">
    <main>
      <img src="${background_image}">
    </main>
    <h1>${name}</h1>
    <div>${platforms.map( p => getPlatformLogo(p) ).join(' ')}</div>
  </article>
  `;
};

const cardGameHover = (game) => {
  const { released, genres, rating, rating_top, ratings_count, tags } = game;
  return `
        <p>${dayjs(released).format('MMM DD, YYYY')}</p>
        <p>${genres.map( g => g.name ).join(', ')}</p>
        <p>${rating}/${rating_top} - ${ratings_count} votes</p>
        <p class="tags">${tags.filter( tag => tag.language === 'eng').map(tag => tag.name ).join(', ')}</p>
  `;
};

const pageListListeners = (results, nbDisplays) => {
  console.log(results);
  const resultsUsed = results.slice(0, nbDisplays);
  resultsUsed.forEach(game => {
    const { id, slug, background_image } = game;
    const gameCard = document.getElementById(id);
    const gameCardMain = gameCard.querySelector('main');
    gameCard.addEventListener('click', () => window.location.replace(`#pagedetail/${slug}`) );
    gameCard.addEventListener('mouseenter', () => gameCardMain.innerHTML = cardGameHover(game) );
    gameCard.addEventListener('mouseleave', () => gameCardMain.innerHTML = `<img src="${background_image}">` );
  }); 
}