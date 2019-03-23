
export default class AgeCalculator {
  constructor() {
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter"];
    this.ageFactors = [1, 0.24, 0.62, 1.88, 11.86];
    this.lifeExpectancies = [78, 18.72, 48.36, 146.64, 925.08];
    this.lifeStyleFactors = ["smoke", "drink", "exercise"];
  }

  // Function takes in the age of the person on the planet Earth and
  // returns the age of the person on the planet provided.
  // earthAge:  The age of the person on earth
  // planet: The planet for which the person's age should be calculated
  //         (ex: mercury, venus, mars).
  calculateAge(earthAge, planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let ageFactor = this.ageFactors[planetIndex];
    let ageOnPlanet = parseFloat(earthAge) * parseFloat(ageFactor);

    return ageOnPlanet;
  }

// Function takes in earth age and planet and calculates
// the number of life the person have left on that planet
  calculateLifeYearRemaining(earthAge, planet) {
    let ageOnPlanet = this.calculateAge(earthAge, planet);
    let lifeExpectancyOnPlanet = this.getLifeExpectancy(planet);
    let yearRemain = lifeExpectancyOnPlanet - ageOnPlanet;
    return yearRemain;
  }

  // Function takes in a planet and returns the life expectancy (average)
  // for human-ish creatures on that planet.
  // planet: The planet for which the person's life expectancy should be calculated
  //         (ex: mercury, venus, mars).
  getLifeExpectancy(planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let lifeExpectancy = this.lifeExpectancies[planetIndex];

    return lifeExpectancy;
  }

  // Function returns the index of the planet in the 'planets'
  // class member variable.
  // planet: The planet for which the person's age should be calculated
  //         (ex: mercury, venus, mars).
  getPlanetIndex(planet) {
    let planetIndex = -1;
    for (let index = 0; index < this.planets.length; index++) {
      if (this.planets[index].toLowerCase() == planet.toLowerCase()) {
        planetIndex = index;
        break;
      }
    }

    if (planetIndex < 0) {
      throw `Planet not supported: ${planet}.  You may be from a star system that we do not recognize as having lifeforms (i.e. you're an alien...watch out!!).`;
    }

    return planetIndex;
  }
}
