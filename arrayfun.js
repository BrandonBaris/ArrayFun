module.exports = {

  first : function ( array , n ){

    if ( n>0 ){

      modarr = array.slice( 0 , n );
    // console.log( 'If greater than 0: ', modarr );

    } else
    {

      modarr = array[ 0 ];

    }

    // console.log( 'If no n specified or 0: ', modarr );
    return modarr;

  },

  max : function ( array ){
    var max_item = 0;

      if (Array.isArray(array) === false || array.length === 0 ){
      return -Infinity;

      } else
      {

        array.reduce(function( previous , next ){
        return next > previous ? max_item = next : max_item = previous;

      });
       //console.log('Give me the max value!: ', max_item );
      }

    return max_item;

  },

  min : function ( array ){
    var min_item = 0;

      if (Array.isArray(array) === false || array.length === 0 ){
      return -Infinity;

      } else
      {

        array.reduce(function( previous , next ){
        return next < previous ? min_item = next : min_item = previous;

      });
       //console.log('Give me the min value!: ', min_item );
      }

    return min_item;

  },

    intersection : function ( array, array ){
    var min_item = 0;

      if (Array.isArray(array) === false || array.length === 0 ){
      return -Infinity;

      } else
      {

        array.reduce(function( previous , next ){
        return next < previous ? min_item = next : min_item = previous;

      });
       //console.log('Give me the min value!: ', min_item );
      }

    return min_item;

  },

};