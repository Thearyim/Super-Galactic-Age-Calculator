import AgeCalculator from './../src/ageCalculator';

describe('AgeCalculator', function() {
  it('should return the correct age for the planet Earth', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "earth";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(2);
  });

  it('should return the correct age for the planet Mercury', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mercury";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(8.34);
  });

  it('should return the correct age for the planet Venus', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "venus";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(3.22);
  });

  it('should return the correct age for the planet Mars', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mars";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(1.06);
  });

  it('should return the correct age for the planet Jupiter', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "jupiter";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(0.168);
  });

  it('should throw exception when determining age and an invalid planet is provided', function() {
    var ageCalculator = new AgeCalculator();

    expect(function() {
      ageCalculator.calculateAge(1, "not a valid planet")}).toThrow();
  });

  it('should return the correct life expectancy for the planet Earth', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "earth";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(78);
  });

  it('should return the correct life expectancy for the planet Mercury', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mercury";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(325.26);
  });

  it('should return the correct life expectancy for the planet Venus', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "venus";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(125.58);
  });

  it('should return the correct life expectancy for the planet Mars', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mars";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(41.34);
  });

  it('should return the correct life expectancy for the planet Jupiter', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "jupiter";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(6.55);
  });

  it('should throw exception when determining life expectancy and an invalid planet is provided', function() {
    var ageCalculator = new AgeCalculator();

    expect(function() {
      ageCalculator.getLifeExpectancy("not a valid planet")}).toThrow();
  });

  it('should return the correct life remaining for the person on the planet Earth', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "earth";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(78-20);
  });

  it('should return the correct life remaining for the person on the planet Mercury', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mercury";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(325.26 - (20 * 4.17));
  });

  it('should return the correct life remaining for the person on the planet Venus', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "venus";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(125.58 - (20 * 1.61));
  });

  it('should return the correct life remaining for the person on the planet Mars', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mars";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(41.34 - (20 * 0.53));
  });

  it('should return the correct life remaining for the person on the planet Jupiter', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "jupiter";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(6.55 - (20 * 0.084));
  });

  it('should return the correct life remaining for the person given lifestyle factors', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "earth";
    var earthAge = 20;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet, ["smoke"])).toEqual((78 * 0.80) - earthAge);
    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet, ["drink"])).toEqual((78 * 0.90) - earthAge);
    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet, ["exercise<3"])).toEqual((78 * 1.05) - earthAge);
    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet, ["exercise>3"])).toEqual((78 * 1.20) - earthAge);
    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet, ["smoke", "drink", "exercise>3"])).toEqual((78 * 0.80 * 0.90 * 1.20) - earthAge);
  });

  it('should return the correct number of years the person has lived past their life expectancy on the planet Earth', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "earth";
    var earthAge = 98;

    expect(ageCalculator.calculateLifeYearRemaining(earthAge, planet)).toEqual(78 - earthAge);
  });
});
