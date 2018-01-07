(function () {
  if(typeof module === 'object' && module.exports ==='object'){
    module.exports={
      find: function (arr, target) {
        var max = arr[0];
        for (var i = 1; i <arr.length; i++){
          if (max[target] < arr[i][target]){
            max = arr[i];
          }
        }
        return max;
      }
    };
  } else{
    window._ ={
      module.exports={
      find: function (arr, target) {
        var max = arr[0];
        for (var i = 1; i <arr.length; i++){
          if (max[target] < arr[i][target]){
            max = arr[i];
          }
        }
        return max;
      }
    };

    }
  }
})(window || {});
