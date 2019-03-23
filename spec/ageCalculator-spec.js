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

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(.48);
  });

  it('should return the correct age for the planet Venus', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "venus";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(1.24);
  });

  it('should return the correct age for the planet Mars', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mars";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(3.76);
  });

  it('should return the correct age for the planet Jupiter', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "jupiter";
    var ageOnEarth = 2;

    expect(ageCalculator.calculateAge(ageOnEarth, planet)).toEqual(23.72);
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

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(18.72);
  });

  it('should return the correct life expectancy for the planet Venus', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "venus";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(48.36);
  });

  it('should return the correct life expectancy for the planet Mars', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "mars";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(146.64);
  });

  it('should return the correct life expectancy for the planet Jupiter', function() {
    var ageCalculator = new AgeCalculator();
    var planet = "jupiter";

    expect(ageCalculator.getLifeExpectancy(planet)).toEqual(925.08);
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
});
