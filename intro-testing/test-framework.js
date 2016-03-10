
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

  it('sum can add', function () {
    expect(sum(2,3)).toBe(5);
    expect(sum(5,0)).toBe(5);
    expect(sum(-2, 3)).toBe(1);
  });

  it('sum should add an arbitrary number of values', function () {
    expect(sum(2,3,4,2,1,1)).toBe(13);
    expect(sum(2,2,1)).toBe(5);
    expect(sum(-2,5,1)).toBe(4);

  });

  it('sum does not add strings', function () {
    expect(sum("2", "3")).toBe("Strings not allowed.");
    expect(sum(2,1,"2", "3")).toBe("Strings not allowed.");
  });

  it('sum will return a number if used correctly', function () {
    expect(typeof sum(2,3)).toBe("number");
  });

});


function sum(x,y) {
  var args = [].slice.call(arguments);
  var total = 0;
  args.forEach(function (item) {
    if (typeof item === "string") {
      total = "Strings not allowed.";
    } else {
      total += item;
    }
  });
  return total;
}

function multiply(x,y) {
  return x * y;
}

description('testing the multiply function', function () {

  it('multiplies two numbers', function () {
    expect(multiply(3,5)).toBe(15);

  })

});
