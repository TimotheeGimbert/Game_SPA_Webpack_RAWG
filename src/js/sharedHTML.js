export { header, footer };


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