var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named intersection()", function(){

    expect( arrayfun.intersection ).toBeDefined();

  });

  it("The intersection() retrieves values present in all arrays", function(){
    var tester1 = [5,2];
    var tester2 = [2,3,4];
    var tester3 = [1,2,3];
    var tester4 = [5,2,1,4];
    var tester5 = [2,1];


  var result1 = arrayfun.intersection( tester1, tester2);
    expect( result1 ).toEqual([2]);
  var result2 = arrayfun.intersection( tester3,tester4,tester5 );
    expect( result2 ).toEqual([1,2]);
  });

});