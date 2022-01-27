export { intro, cardGame };

const intro = () => {
  return `
    <aside class="intro">
      <h1>Welcome,</h1>
      <p>
        The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame,
        the video game industry's top talents pack the Los Angeles Convention Center, connecting tens of thousands of the best,
        brightest, and most innovative int the interactive entertainment industry. For three exciting days, leading-edge companies,
        groundbreaking new technologies, and never-before-seen products will be showcased? The Hyper Progame connects you
        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.
      </p>
      <p> <br> This fictionnal demo project has been coded in pure JavaScript and SCSS (Vanilla JS + Sass) over 3 days of alone-work.</p>
    </aside>
  `;
};

const cardGame = (game) => {
  const { id, background_image, name, platforms } = game;
  
  const getPlatformLogo = (platform) => {
    if (platform.platform.name.includes('Xbox')) return '<img src="./src/assets/images/logos/xbox.svg">'
    if (platform.platform.name.includes('PlayStation')) return '<img src="./src/assets/images/logos/ps4.svg">'
    if (platform.platform.name.includes('Switch')) return '<img src="./src/assets/images/logos/switch.svg">'
    if (platform.platform.name.includes('PC')) return '<img src="./src/assets/images/logos/windows.svg">'
    if (platform.platform.name.includes('Linux')) return '<img src="./src/assets/images/logos/linux.svg">'
    if (platform.platform.name.includes('Android')) return '<img src="./src/assets/images/logos/mobile.svg">'
  }

  return `
  <article id="${id}" class="cardGame">
    <main>
      <img src="${background_image}">
    </main>
    <h1>${name}</h1>
    <div>${platforms.map( p => getPlatformLogo(p) ).join(' ')}</div>
  </article>
  `;
};

