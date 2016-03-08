
function description(description, contents) {
  console.log(description + " set of tests");
  contents();
}
function it(testDesc, contents) {
  console.log(testDesc);
  contents();
}

function expect(target) {

  return {
    toBe: function (expectation) {
      if(target === expectation) {
        console.log('PASSED', expectation + " is " + target);
      } else {
        console.log('FAILED', expectation + " is not " + target);
      }
    }
  }
}


description('tests the sum function', function () {

  it('sum can add any number of values', function () {
    expect(sum(2,3,3,444,5,2)).toBe(459);
    expect(sum(5,0)).toBe(5);
    expect(sum(-2, 3)).toBe(1);
  });

  it('sum does not add strings', function () {
    expect(sum("2", "3")).toBe("Strings not allowed.");
  });

  it('sum will return a number if used correctly', function () {
    expect(typeof sum(2,3)).toBe("number");
  });

});


function sum(x,y) {

  if(typeof x === "string" || typeof y === "string") {
    return "Strings not allowed."
  }
  

  return x + y;
}

function multiply(x,y) {
  return x * y;
}

description('testing the multiply function', function () {

  it('multiplies two numbers', function () {
    expect(multiply(3,5)).toBe(15);

  })

});
