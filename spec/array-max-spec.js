var arrayfun = require('../arrayfun');

describe("arrayfun", function(){

  it("Must have a function named max()", function(){

    expect( arrayfun.max ).toBeDefined();

  });

  it("The max() retrieves the maximum value of a collection.", function(){
    var tester1 = [6,2,3,11];

    var result1 = arrayfun.max( tester1 );

    expect( result1 ).toBe( 11 );
  });

  it("If the collection is empty or falsey -Infinity is returned.",function(){
        var tester2 = [];
        var tester3 = "123";

        var result2 = arrayfun.max( tester2 );
        expect( result2 ).toEqual( -Infinity );

        var result3 = arrayfun.max( tester3 );
        expect( result3 ).toEqual( -Infinity );

  });

});