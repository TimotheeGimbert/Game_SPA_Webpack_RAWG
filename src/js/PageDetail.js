import { header, footer } from './sharedHTML';
import { globalListeners, pageDetailListeners } from './listeners';
import { hero, presentation, buy, trailer, screenshots } from './pageDetailDOM';
export { PageDetail };

const PageDetail = (argument) => {

  const preparePage = () => {

    const displayGame = (gameData) => {
      presentation(gameData);
      const resultsContainer = document.querySelector(".page-detail");
      resultsContainer.innerHTML = 
        hero(gameData) 
      + presentation(gameData)
      + buy(gameData) 
      + '<section id="trailer"></section>'
      + '<section id="screenshots"></section>';

      trailer(gameData.id);
      screenshots(gameData.id);
      globalListeners();
      pageDetailListeners(gameData);
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
        .then( response => response.json() )
        .then( responseObject => displayGame(responseObject) );
      };

    const cleanedArgument = argument.replace(/\s+/g, "-");
    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header()
    + `<main class="page-detail">... loading ...</main>`
    + footer();

    preparePage();
  };

  render();
};