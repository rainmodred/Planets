import data from './data.json';

function getPlanet(planetName) {
  return data.find(planet => planet.name === planetName);
}

function getAllPaths() {
  return data.map(planet => ({
    params: { planet: planet.name },
  }));
}

export { getPlanet, getAllPaths };
