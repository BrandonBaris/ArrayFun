var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named contains()", function(){

    expect( arrayfun.contains ).toBeDefined();

  });

  it("The contains() checks if a certain value exists in the array.", function(){
    var tester1a = [1,2,3];
    var tester1b = 1;
    var tester2a = [1,2,3];
    var tester2b = 44;

  var result1 = arrayfun.contains( tester1a, tester1b);
    expect( result1 ).toEqual(true);
  var result2 = arrayfun.contains( tester2a, tester2b);
    expect( result2 ).toEqual(false);

  });

});