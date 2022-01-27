import dayjs from 'dayjs';
export { globalListeners, pageListListeners, pageDetailListeners };

const globalListeners = () => {

  const homeTitle = document.getElementById('websiteHeading');
  homeTitle.addEventListener('click', () => {
    window.location.hash = '#pagelist';
  });

  document.addEventListener('keypress', (e) => {
    const searchBar = document.getElementById('search');
    if (e.key === "Enter" && e.target === searchBar) {
      e.preventDefault();
      window.location.hash = `#pagelist/${searchBar.value}`;
    }
  });

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('click', () => searchInput.value = '' );
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

const pageDetailListeners = (gameData) => {
  const { website } = gameData;
  const websiteButton = document.querySelector('.hero button');
  websiteButton.addEventListener('click', () => window.open(website) );

  const homeTitle = document.getElementById('websiteHeading');
  homeTitle.addEventListener('click', () => window.location.hash = '#pagelist');
};