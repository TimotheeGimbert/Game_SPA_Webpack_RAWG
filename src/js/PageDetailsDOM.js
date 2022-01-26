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
const pageLoading = () => {
  return `
    <main class="page-list">
      <button class="filter">Plateform : </button>
      <div class="grid">...loading</div>
      <button class="more">Show more</button>
    </main>
  `;
};

const cardGame = (article) => {
  return `
  <article id="${article.id}" class="cardGame">
    <main>
      <img src="${article.background_image}">
    </main>
    <h1>${article.name}</h1>
  </article>
  `;
};

const cardGameHover = (article) => {
  const getGenres = (article) => {
    const genres = [];
    article.genres.forEach( e => genres.push(e.name) )
    return genres;
  }
  return `
        <p>${article.released}</p>
        <p>${getGenres(article).join(', ')}</p>
        <p>${article.rating}/${article.rating_top} - ${article.ratings_count} votes</p>
  `;
};

const createListeners = (articles) => {
  articles.forEach(article => {
    const articleDOM = document.getElementById(article.id);
    const articleMain = articleDOM.querySelector('main');
    articleDOM.addEventListener('click', () => window.location.replace(`#pagedetail/${article.id}`) );
    articleDOM.addEventListener('mouseenter', () => articleMain.innerHTML = cardGameHover(article) );
    articleDOM.addEventListener('mouseleave', () => articleMain.innerHTML = `<img src="${article.background_image}">` );
  }); 
}

export { intro, pageLoading, cardGame, createListeners };