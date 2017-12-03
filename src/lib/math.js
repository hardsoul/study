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
  max : function (a) {
    var array = a instanceof Array ? a : arguments;
    var result = array[0];
    for(var i = 0; i < array.length; i++) {
      if(result < array[i]) {
        result = array[i];
      }
    }
    return result;
  },
	countIf : function(arr, target){
    var result = 0;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] === target) {
				result++;
			}
		}
		return result;
	},
	sumIfOver : function(arr, limit){
		var result = 0;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] > limit) {
				result += arr[i];
			}
		}
		//여기서 일을 2가지 하고있다. 이걸 1개로 수정해야해. 반복하면서1, 찾는거 1개 총 2개의 일.
		return result;
	},
	sumIfUnder : function(arr, limit){
		var result = 0;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] <= limit) {
				result += arr[i];
			}
		}
		return result;
	}

}
module.exports = math;
