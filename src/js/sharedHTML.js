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
      <p>Timothée @ 2022</p>
      <hr>
      <p>
        This fictionnal website has been coded in pure JavaScript over a 3 days 
        work-alone project. It's a Single Page Applicaiton (SPA) that uses Webpack 
        and NPM, and connects to an API (RAWG). It is styled with a CSS preprocessor.
      </p>
    </footer>
  `;
};