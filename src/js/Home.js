const Home = (argument = '') => {
  document.querySelector('#pageContent').innerHTML = "Choisissez un lien";
  console.log('Home', argument);
}

export { Home };