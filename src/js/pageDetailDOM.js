export { hero, presentation, buy, trailer, screenshots };

const hero = (gameData) => {
  const { background_image } = gameData;
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
  if (jsonObj.results.length === 0) return;
  const trailerURL = jsonObj.results[0].data.max;
  document.getElementById('trailer').innerHTML =  `
    <h2>TRAILER</h2>
    <video controls>
      <source src="${trailerURL}">
    </video>
  `;
}
const fetchTrailer = (url, argument) => {
  fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
    .then( response => response.json() )
    .then( responseObject => displayTrailer(responseObject) );
};
const trailer = (gameID) => fetchTrailer('https://api.rawg.io/api/games', `${gameID}/movies`);

const displayScreenshots = (jsonObj) => {
  const screenshotsURLs = jsonObj.results.slice(0, 4);
  const screenshots = document.getElementById('screenshots');
  screenshots.innerHTML =  `<h2>SCREENSHOTS</h2>`;
  screenshotsURLs.forEach( (screenshot) => {
    screenshots.innerHTML +=  `<img src="${screenshot.image}">`;
  });
}
const fetchScreenshots = (url, argument) => {
  fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
    .then( response => response.json() )
    .then( responseObject => displayScreenshots(responseObject) );
};
const screenshots = (gameID) => fetchScreenshots('https://api.rawg.io/api/games', `${gameID}/screenshots`);







// BELOW CODE NEES A SPECIAL API AUTHORIZATION SO IS NOT WORKING

/* const displaySimilars = (jsonObj) => {
  console.log('this is the jsonObj', jsonObj);
  const similars = document.getElementById('similars');
  similars.innerHTML =  `<h2>SIMILAR GAMES</h2>`;

}
const fetchSimilars = (url, argument) => {
  fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
    .then( response => response.json() )
    .then( responseObject => displaySimilars(responseObject) );
};
const similars = (gameID) => fetchSimilars('https://api.rawg.io/api/games', `${gameID}/suggested`); */