var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named min()", function(){

    expect( arrayfun.min ).toBeDefined();

  });

  it("The min() retrieves the maximum value of a collection.", function(){
    var tester1 = [6,2,3,11];

    var result1 = arrayfun.min( tester1 );

    expect( result1 ).toBe( 2 );
  });

  it("If the collection is empty or falsey -Infinity is returned.",function(){
        var tester2 = [];
        var tester3 = "123";

        var result2 = arrayfun.min( tester2 );
        expect( result2 ).toEqual( -Infinity );

        var result3 = arrayfun.min( tester3 );
        expect( result3 ).toEqual( -Infinity );

  });

});