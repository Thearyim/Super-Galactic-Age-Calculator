

export default class AgeCalculator {
  constructor() {
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter"];
    this.ageFactors = [1, 4.17, 1.61, 0.53, 0.084];
    this.lifeExpectancies = [78, 325.26, 125.58, 41.34, 6.55];
    this.lifeExpectancyModifiers = [
      ["smoke", 0.80],
      ["drink", 0.90],
      ["exercise<3", 1.05],
      ["exercise>3", 1.20]
    ];
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
  // earthAge: The age of the person on earth
  // planet: The planet for which the person's age should be calculated
  //         (ex: mercury, venus, mars).
  // lifestyleFactors: An array of zero or more factors that can influence
  //          the lifespan of a human-ish creature.
  calculateLifeYearRemaining(earthAge, planet, lifestyleFactors) {
    let ageOnPlanet = this.calculateAge(earthAge, planet);
    let lifeExpectancyOnPlanet = this.getLifeExpectancy(planet);
    if (lifestyleFactors && lifestyleFactors.length > 0) {
      for (let factorIndex = 0; factorIndex < lifestyleFactors.length; factorIndex++) {
        let modifier = this.getLifestyleModifier(lifestyleFactors[factorIndex]);
        lifeExpectancyOnPlanet = lifeExpectancyOnPlanet * modifier;
      }
    }

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

  // Function takes in a planet and returns the life expectancy (average)
  // for human-ish creatures on that planet.
  // planet: The planet for which the person's life expectancy should be calculated
  //         (ex: mercury, venus, mars).
  getLifestyleModifier(factor) {
    let modifier = -1;
    for (let index = 0; index < this.lifeExpectancyModifiers.length; index++) {
      // Given:
      // var modifiers = [
      //   ["factor1", 0.80],
      //   ["factor2", 1.20]
      // ]
      // modifiers[0][0] == "factor1" and modifiers[0][1] == 0.80
      // modifiers[1][0] == "factor2" and modifiers[1][1] == 1.20
      if (this.lifeExpectancyModifiers[index][0].toLowerCase() == factor.toLowerCase()) {
        modifier = this.lifeExpectancyModifiers[index][1];
        break;
      }
    }

    if (modifier < 0) {
      throw `Factor not supported: ${factor}.  You may be factoring in a lifestyle choice we are not cool enough to know about (i.e. you're either French or rich!!).`;
    }

    return modifier;
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
