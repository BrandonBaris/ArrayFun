module.exports = {

  first : function ( array , n )
    {
      if ( n>0 )
      {
        modarr = array.slice( 0 , n );
        //console.log( 'If greater than 0 then the items left after slicing: ', modarr );
      } else
        {
          modarr = array[ 0 ];
          //console.log( 'If no n specified or 0 then first index: ', modarr );
        }
      return modarr;
    },

  max : function ( array )
    {
      var max_item = 0;
      if (Array.isArray(array) === false || array.length === 0 )
        {
            return -Infinity;
        } else
          {
            array.reduce(function( previous , next )
            {
              return next > previous ? max_item = next : max_item = previous;
            });
            
          }
      //console.log('Give me the max value!: ', max_item );
      return max_item;
    },

  min : function ( array )
    {
      var min_item = 0;
      if (Array.isArray(array) === false || array.length === 0 )
        {
          return -Infinity;
        } else
          {
            array.reduce(function( previous , next )
              {
                return next < previous ? min_item = next : min_item = previous;
              });
          }
      //console.log('Give me the min value!: ', min_item );
      return min_item;
    },

  intersection : function ()
    {
      /* chop it up */
      var args = [].slice.call(arguments);
      /* reduce the arguments by using the first arrays values as
      a cookie cutter to filter the common values found in each array
      then reduce them */
      return args.reduce(
        function(array1, array2) {
          var whoisleft = array1.filter( function(value) 
          {
            var workitout = (array2.some( function(current) 
              {
                var their_kind = current === value;
                //console.log('current',current,'value',value,'ok>',their_kind);
                return their_kind;
              }));
            //console.log('Comparison ok?',workitout);
            return workitout;
          });
          //console.log('-----Who is left?',whoisleft,'-----');
          return whoisleft;
        }
        
      );
    },

  difference : function ()
    {
      /* chop it up */
      var args = [].slice.call(arguments);
      /* compares each array value of the first array to the values
      of another array only continuing if the pair don't match.
      Once a pair matches, the current number being matched is removed 
      from the list resulting in an array of the unpaired values */
      return args.reduce(
        function(array1, array2) {
          var whoisleft = array1.filter( function(value) 
          {
            var workitout = (array2.every( function(current) 
              {
                var their_kind = current !== value;
                console.log('current',current,'value',value,'ok>',their_kind);
                return their_kind;
              }));
            console.log('Comparison ok?',workitout);
            return workitout;
          });
          console.log('-----Who is left?',whoisleft,'-----');
          return whoisleft;
        }
      );
    },

  uniq : function ( array )
    {
      //console.log('The virgin array is:', array);
      var filthy = array.filter(function(current,index,arr)
      {
        var u_legit = (index === arr.indexOf(current));
        //console.log('currant selection',current,'in india',index,'verdict =',u_legit); 
        return  u_legit;
      });
        //console.log('-----The filthy array is:', filthy,'-----');
        return filthy;
    },

  contains : function ( array, target )
    {
      var checkit = array.indexOf( target ) !== -1;
      //console.log('YOU GOT IT?!',checkit);
      return  checkit;
    }
};