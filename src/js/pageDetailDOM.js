export { hero, presentation, pageDetailListeners };

const hero = (gameData) => {
  const { background_image, website } = gameData;
  const bg_css = `background-image: url(${background_image})`;
  return `
    <section class="hero" style="${bg_css}">
      <button>Visit Official Website</button>
    </section>
  `;
};

const presentation = (gameData) => {
  console.log(gameData);
  const { name, rating, rating_top, ratings_count, description } = gameData;
  return `
    <section class="presentation">
      <div class="heading">
        <div class="title">
          <h1>${name}</h1>
          <p>?? Short description ??</p>
        </div>
        <div class="rating">${rating}/${rating_top} - ${ratings_count} votes</div>
      </div>
      <div class="info">
        <h2>Plot</h2>
        <p>${description}</p>
      </div>
      <div class="info">
        <h2>Description</h2>
        <p>${description}</p>
      </div>
      <div class="details">
        DETAILS TO IMPLEMENT
      </div>
    </section>
  `;
};

const pageDetailListeners = (gameData) => {
  const { website } = gameData;
  const websiteButton = document.querySelector('.hero button');
  websiteButton.addEventListener('click', () => {
    window.open(website);
  });

  const homeTitle = document.getElementById('websiteHeading');
  homeTitle.addEventListener('click', () => {
    console.log(window.location.hash);
    window.location.hash = '#pagelist';
  });
};