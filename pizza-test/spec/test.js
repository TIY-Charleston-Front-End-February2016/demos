var expect = chai.expect;
var should = chai.should();

describe("When making a pizza",function() {
  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  it('should have mocha running', function() {
    var num = Math.random();
    expect(num).to.be.a('number');
    expect(num).to.not.eq(2);
  });

  describe('when given nut allergies', function() {
    it('should only return products that do not contain nuts', function() {

      var noNutsPizza = checkIfNutsInPizza(products);
      expect(noNutsPizza).to.have.length(3);
      noNutsPizza.should.have.length(3);
      noNutsPizza[0].should.have.property('name');
      noNutsPizza[0]['name'].should.be.eq('Sonoma');
    })
  })

  describe("when customer hates sundried tomatoes", function() {
    it("should only return pies without sundrieds", function() {
      var noSundrieds = checkForSundrieds(products);
      expect(products[0].ingredients).to.not.contain('sundried tomatoes');
      expect(products.length).to.eq(2);
    })
  })
});
