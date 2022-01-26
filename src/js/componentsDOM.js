export { header, footer, globalListeners };

const header = () => {
  return `
    <header>
      <h1 id="websiteHeading">The Hyper ProGame</h1>
      <form>
        <img src="./src/assets/images/icons/search.svg">
        <input id="search" type="text" name="search" VALUE="Find a game ...">
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