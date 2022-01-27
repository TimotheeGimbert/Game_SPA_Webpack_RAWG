import { header, footer, globalListeners } from './componentsDOM';
import { intro, cardGame, pageListListeners } from './pageListDOM';
export { PageList };

const PageList = (argument = '') => {

  const preparePage = () => {

    let fullResults = [];
    let totalDisplayed = 0;
    const nbToDisplay = 9;
    const maxToDisplay = 27;
    const resultsContainer = document.querySelector(".page-list .grid");
    const moreButton = document.getElementById('moreButton');

    resultsContainer.innerHTML = '';

    const displayResults = (results) => {
      const resultsContent = results.map( result => cardGame(result) );
      resultsContainer.innerHTML += resultsContent;
      globalListeners();
      pageListListeners(results);
      totalDisplayed += nbToDisplay;
    };

    moreButton.addEventListener('click', () => {
      if (totalDisplayed >= maxToDisplay) return;
      else {
        displayResults(fullResults.slice(totalDisplayed, totalDisplayed + nbToDisplay));
        if (totalDisplayed >= maxToDisplay) moreButton.style.display = 'none';
      }
    });

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then( response => response.json() )
        .then( responseObject => {
          fullResults = responseObject.results;
          displayResults(fullResults.slice(0, nbToDisplay));
        });
    };

    const cleanedArgument = argument.replace(/\s+/g, "-");
    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header() 
    + intro()
    + `<main class="page-list">
        <div class="grid">... loading ...</div>
        <button id="moreButton">Show more</button>
      </main>`
    + footer();

    preparePage();
  };

  render();
};