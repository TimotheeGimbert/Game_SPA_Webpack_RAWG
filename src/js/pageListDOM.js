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
  const { id, background_image, name } = game;
  return `
  <article id="${id}" class="cardGame">
    <main>
      <img src="${background_image}">
    </main>
    <h1>${name}</h1>
  </article>
  `;
};

const cardGameHover = (game) => {
  const { released, rating, rating_top, ratings_count } = game;
  const getGenres = () => {
    const genresList = [];
    game.genres.forEach( genre => genresList.push(genre.name) );
    return genresList.join(', ');
  }
  return `
        <p>${released}</p>
        <p>${getGenres()}</p>
        <p>${rating}/${rating_top} - ${ratings_count} votes</p>
  `;
};

const pageListListeners = (games) => {
  games.forEach(game => {
    const { id, background_image } = game;
    const gameCard = document.getElementById(id);
    const gameCardMain = gameCard.querySelector('main');
    gameCard.addEventListener('click', () => window.location.replace(`#pagedetail/${id}`) );
    gameCard.addEventListener('mouseenter', () => gameCardMain.innerHTML = cardGameHover(game) );
    gameCard.addEventListener('mouseleave', () => gameCardMain.innerHTML = `<img src="${background_image}">` );
  }); 
}