export { hero, presentation };

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
  return `
    <section class="presentation">
      <div class="heading">
        <div class="title">
          <h1>Title of the game</h1>
          <p>Short description</p>
        </div>
        <div class="rating">GameRatings</div>
      </div>

      <div class="info">
        <h2>Info title</h2>
        <p>Info description</p>
      </div>

      <div class="info">
        <h2>Info title</h2>
        <p>Info description</p>
      </div>

      <div class="details">

      </div>
    </section>
  `;
};