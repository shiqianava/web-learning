var arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function insert(arr) {
  for (var i = 0; i < arr.length - 1; i++){
	var k = i;
    for (var j = i + 1; j < arr.length; j++){
      if (arr[k] > arr[j]){
        k = j;
      }
    }
	if (k !== i){
	  var temp = arr[k];
	  arr[k] = arr[i];
	  arr[i] = temp;
	}
  }
}
insert(arr);
console.log(arr);