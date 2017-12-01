var math = {
  sum : function(numbers){
    var targetNumber = numbers[0] + numbers[numbers.length - 1];
    return targetNumber * (numbers.length / 2);
  },
  min : function (a,b,c) {
    var array = a instanceof Array ? a : arguments;
    var result = array[0];
    for(var i = 0; i < array.length; i++) {
      if(result > array[i]) {
        result = array[i];
      }
    }
    return result;
  },
  max : function (a,b,c) {
    var array = a instanceof Array ? a : arguments;
    var result = array[0];
    for(var i = 0; i < array.length; i++) {
      if(result < array[i]) {
        result = array[i];
      }
    }
    return result;
  },
	countIf : function(a, b){
    var array = a instanceof Array ? a : arguments;
		var result = 0;
		for(var i = 0; i < array.length; i++) {
			if(array[i] === b) {
				result += 1;
			}
		}
		return result;
	},
	sumIfOver : function(a, b){
		var array = a instanceof Array ? a : arguments;
		var result = 0;
		for(var i = 0; i < array.length; i++) {
			if(array[i] > b) {
				result += array[i];
			}
		}
		return result;
	},
	sumIfUnder : function(a, b){
		var array = a instanceof Array ? a : arguments;
		var result = 0;
		for(var i = 0; i < array.length; i++) {
			if(array[i] <= b) {
				result += array[i];
			}
		}
		return result;
	}

}
module.exports = math;
