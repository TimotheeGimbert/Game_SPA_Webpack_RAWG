export { pageDetailLoading, hero, presentation };

const pageDetailLoading = () => {
  return `
    <main class="page-detail">
      <section class="presentation">... loading ...</section>
    </main>
  `;
};

const hero = (gameData) => {

};

const presentation = (gameData) => {
  return `
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
  `;
};