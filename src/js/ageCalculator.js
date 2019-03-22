
export default class AgeCalculator {
  constructor() {
    this.age = 0;
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter"];
    this.ageFactors = [1, .24, .62, 1.88, 11.86];
    this.lifeExpectancy = [78, 18.72, 48.36, 146.64, 925.08];
    this.lifeStyleFactors = ["smoke", "drink", "exercise"];
  }
}

AgeCalculator.prototype.getAge = function () {
  let calculator = document.getAgebyPlanet('planet', 'age');

  for (let currentPlanet = 0; currentPlanet < planets.lenght; currentPlanet++) {
    let planet = calculator.planets[currentPlanet];

    for (let currentAgeFactor = 0; currentAgeFactor < ageFactors.length; currentAgeFactor++) {
      let ageFactor = calculator.ageFactors[currentAgeFactor];
      while (age !=0) {
        calculator[currentPlanet] = planets[currentPlanet].ageFactors[currentAgeFactor];
      }

    
    }
  }
};

  getAge('planet', 'age') {


    this.planets.ageFactors();

    for (var i = 0; i <= planets.length; i++)
    let planet = calculator.planets[planetName];
  }

  getLifeExpectany(lifeStyleFactors, planet) {

  }
