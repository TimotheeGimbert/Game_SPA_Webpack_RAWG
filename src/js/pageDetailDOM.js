export { hero, presentation, buy, trailer, pageDetailListeners };

const hero = (gameData) => {
  const { background_image } = gameData;
  console.log(gameData);

  const bg_css = `background-image: url(${background_image})`;
  return `
    <section class="hero" style="${bg_css}">
      <button>Visit Official Website</button>
    </section>
  `;
};

const presentation = (gameData) => {
  const { name, rating, rating_top, ratings_count, description, released, developers, platforms, publishers, tags, genres } = gameData;
  return `
    <section class="presentation">
      <div class="heading">
        <div class="title">
          <h1>${name}</h1>
        </div>
        <div class="rating">${rating}/${rating_top} - ${ratings_count} votes</div>
      </div>
      <div class="description">
        <h4>Description</h4>
        <p>${description}</p>
      </div>
      <div class="details">
        <div>
          <h4>Release Date</h4>
          <p>${released}</p>
        </div>
        <div>
          <h4>Developers</h4>
          <p>${developers.map(dev => `<a href="#pagelist/&developers=${dev.slug}">${dev.name}</a>`).join(', ')}</p>
        </div>
        <div>
          <h4>Platforms</h4>
          <p>${platforms.map(p => `<a href="#pagelist/&platforms=${p.platform.id}">${p.platform.name}</a>`).join(', ')}</p>
        </div>
        <div>
          <h4>Publishers</h4>
          <p>${publishers.map(pub => `<a href="#pagelist/&publishers=${pub.slug}">${pub.name}</a>`).join(', ')}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <p>${genres.map(genre => `<a href="#pagelist/&genres=${genre.slug}">${genre.name}</a>`).join(', ')}</p>
        </div>
        <div>
          <h4>Tags</h4>
          <p>${tags.map(tag => `<a href="#pagelist/&tags=${tag.slug}">${tag.name}</a>`).join(', ')}</p>
        </div>
      </div>
    </section>
  `;
};

const pageDetailListeners = (gameData) => {
  const { website } = gameData;
  const websiteButton = document.querySelector('.hero button');
  websiteButton.addEventListener('click', () => window.open(website) );

  const homeTitle = document.getElementById('websiteHeading');
  homeTitle.addEventListener('click', () => window.location.hash = '#pagelist');
};

const buy = (gameData) => {
  const { stores } = gameData;
  let resultHTML = `<section class="buy"> <h2>BUY</h2>`;
  stores.map( store => {
    resultHTML += `<a href="https://${store.store.domain}" target="_blank">${store.store.name}</a><br>`;
  });
  resultHTML += `</section>`; 
  return resultHTML;
};

const displayTrailer = (jsonObj) => {
  const trailerURL = jsonObj.results[0].data.max;
  document.getElementById('trailer').innerHTML =  `<iframe src="${trailerURL}" title="description"></iframe>`;
}

const fetchTrailer = (url, argument) => {
  fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
    .then( response => response.json() )
    .then( responseObject => displayTrailer(responseObject) );
};

const trailer = (gameID) => {
  fetchTrailer('https://api.rawg.io/api/games', `${gameID}/movies`);
};