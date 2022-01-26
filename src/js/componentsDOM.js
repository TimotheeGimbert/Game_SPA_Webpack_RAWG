export { header, footer };

const header = () => {
  return `
    <header>
      <h1>The Hyper ProGame</h1>
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