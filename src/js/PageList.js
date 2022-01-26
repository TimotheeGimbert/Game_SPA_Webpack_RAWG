import { header, footer } from './componentsDOM';
import { intro, pageListLoading, cardGame, pageListListeners } from './pageListDOM';
export { PageList };

const PageList = (argument = '') => {

  const preparePage = () => {
    
    const displayResults = (results) => {
      console.log(results);
      const resultsContent = results.map( result => cardGame(result) );
      const resultsContainer = document.querySelector(".page-list .grid");
      resultsContainer.innerHTML = resultsContent;
      pageListListeners(results);
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    const cleanedArgument = argument.replace(/\s+/g, "-");
    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header() 
    + intro()
    + pageListLoading()
    + footer();

    preparePage();
  };

  render();
};