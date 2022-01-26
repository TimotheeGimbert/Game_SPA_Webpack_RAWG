import dayjs from 'dayjs';
export { intro, cardGame, pageListListeners };

const intro = () => {
  return `
    <aside class="intro">
      <h1>Welcome,</h1>
      <p>
        A video game or computer game is an electronic game that involves 
        interaction with a user interface or input device – such as a joystick, 
        controller, keyboard, or motion sensing device – to generate visual 
        feedback. This feedback is shown on a video display device, such as a TV 
        set, monitor, touchscreen, or virtual reality headset. Video games are 
        often augmented with audio feedback delivered through speakers or headphones,
        and sometimes with other types of feedback, including haptic technology.
      </p>
    </aside>
  `;
};

const cardGame = (game) => {
  const { slug, background_image, name, platforms } = game;
  
  const getPlatformLogo = (platform) => {
   if (platform.platform.name.includes('Xbox')) return '<img src="./src/assets/images/logos/xbox.svg">'
   if (platform.platform.name.includes('PlayStation')) return '<img src="./src/assets/images/logos/ps4.svg">'
   if (platform.platform.name.includes('Switch')) return '<img src="./src/assets/images/logos/switch.svg">'
   if (platform.platform.name.includes('PC')) return '<img src="./src/assets/images/logos/windows.svg">'
   if (platform.platform.name.includes('Linux')) return '<img src="./src/assets/images/logos/linux.svg">'
   if (platform.platform.name.includes('Android')) return '<img src="./src/assets/images/logos/mobile.svg">'
  }

  return `
  <article id="${slug}" class="cardGame">
    <main>
      <img src="${background_image}">
    </main>
    <h1>${name}</h1>
    <div>${platforms.map( p => getPlatformLogo(p) ).join(' ')}</div>
  </article>
  `;
};

const cardGameHover = (game) => {
  const { released, genres, rating, rating_top, ratings_count } = game;

  return `
        <p>${dayjs(released).format('MMM DD, YYYY')}</p>
        <p>${genres.map( g => g.name ).join(', ')}</p>
        <p>${rating}/${rating_top} - ${ratings_count} votes</p>
        <p class="tags">${game.tags.map( tag => tag.name ).join(', ')}</p>
  `;
};

const pageListListeners = (games) => {
  games.forEach(game => {
    const { slug, background_image } = game;
    const gameCard = document.getElementById(slug);
    const gameCardMain = gameCard.querySelector('main');
    gameCard.addEventListener('click', () => window.location.replace(`#pagedetail/${slug}`) );
    gameCard.addEventListener('mouseenter', () => gameCardMain.innerHTML = cardGameHover(game) );
    gameCard.addEventListener('mouseleave', () => gameCardMain.innerHTML = `<img src="${background_image}">` );
  }); 
}