export { header, footer, globalListeners };

const header = () => {
  return `
    <header>
      <h1 id="websiteHeading">The Hyper ProGame</h1>
      <form>
        <input id="search" type="text" name="search">
      </form>
    </header>
  `;
};

const footer = () => {
  return `
    <footer>
      <hr>
      <p>Timothée @ 2022 - Fictional website for exercice</p>
    </footer>
  `;
};

const globalListeners = () => {
  const homeTitle = document.getElementById('websiteHeading');
  homeTitle.addEventListener('click', () => {
    console.log(window.location.hash);
    window.location.hash = '#pagelist';
  });
};