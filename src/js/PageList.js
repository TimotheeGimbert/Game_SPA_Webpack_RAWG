import { header, footer } from './componentsDOM';
import { intro, pageLoading, cardGame, createListeners } from './PageDetailsDOM';

const PageList = (argument = '') => {
  console.log('PageList', argument);

  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");
    const displayResults = (results) => {
      console.log(results);
      const resultsContent = results.map( article => cardGame(article) );
      const resultsContainer = document.querySelector(".page-list .grid");
      resultsContainer.innerHTML = resultsContent;
      createListeners(results);
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = 
      header() 
    + intro()
    + pageLoading()
    + footer();

    preparePage();
  };

  render();
};


export { PageList };