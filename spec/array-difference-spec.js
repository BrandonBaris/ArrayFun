var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named difference()", function(){

    expect( arrayfun.difference ).toBeDefined();

  });

  it("The difference() creates an array that removes any numbers that are present in another array given.", function(){
    var tester1 = [1,2,3,4,5];
    var tester2 = [5,2,10];

  var result1 = arrayfun.difference( tester1, tester2);
    expect( result1 ).toEqual([1,3,4]);

  });

});