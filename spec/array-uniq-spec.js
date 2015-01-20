var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named uniq()", function(){

    expect( arrayfun.uniq ).toBeDefined();

  });

  it("The uniq() creates an array that is free of duplicates.", function(){
    var tester1 = [1,2,1,3,1];
    var tester2 = [11,1,2,2,3,4,5,5,5,7,8];

  var result1 = arrayfun.uniq( tester1);
    expect( result1 ).toEqual([1,2,3]);
  var result2 = arrayfun.uniq( tester2);
    expect( result2 ).toEqual([11,1,2,3,4,5,7,8]);

  });

});