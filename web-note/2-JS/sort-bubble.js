var arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function bubble(arr) {
  for (var i = 0; i < arr.length - 1; i++){
    for (var j = 0; j < arr.length - i - 1; j++){
	  if (arr[j] > arr[j + 1]){
		var temp = arr[j];
		arr[j] = arr[j + 1];
		arr[j + 1] = temp;
	  }
    }
  }
}

bubble(arr);
console.log(arr);