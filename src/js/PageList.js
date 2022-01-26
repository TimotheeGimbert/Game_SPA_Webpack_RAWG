import { PageDetail } from './PageDetail';


const PageList = (argument = '') => {
  console.log('PageList', argument);

  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");

    const displayResults = (results) => {
      console.log(results);
      const resultsContent = results.map((article) => (
        `<article id="${article.id}" class="cardGame">
          <img src="${article.background_image}">
          <h1>${article.name}</h1>
          <a href="#pagedetail/${article.id}">${article.id}</a>
        </article>`
      ));
      const resultsContainer = document.querySelector(".page-list .grid");
      resultsContainer.innerHTML = resultsContent.join("\n");

      results.forEach(article => {
        document.getElementById(article.id).addEventListener('click', () => {
          window.location.replace(`#pagedetail/${article.id}`);
        });
      }); 
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
    pageContent.innerHTML = `
      <header>
        <h1>The Hyper ProGame</h1>
        <form>
          <input type="submit" id="searchButton" class="" value="Go !">
          <input id="search" type="text" name="search">
        </form>
      </header>
    `;
    pageContent.innerHTML += `
      <aside class="intro">
        <h1>Welcome,</h1>
        <p>
          A video game or computer game is an electronic game that involves 
          interaction with a user interface or input device – such as a joystick, 
          controller, keyboard, or motion sensing device – to generate visual 
          feedback. This feedback is shown on a video display device, such as a TV 
          set, monitor, touchscreen, or virtual reality headset. Video games are 
          often augmented with audio feedback delivered through speakers or headphones,
          and sometimes with other types of feedback, including haptic technology.
        </p>
      </aside>
    `;
    pageContent.innerHTML += `
      <main class="page-list">
        <button class="filter">Plateform : </button>
        <div class="grid">...loading</div>
        <button class="more">Show more</button>
      </main>
    `;
    pageContent.innerHTML += `
      <footer>
        <hr>
        <p>Timothée @ 2022 - Fictional website for exercice</p>
      </footer>
    `;

    preparePage();
  };

  render();
};


export { PageList };