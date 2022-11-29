var arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

function select(arr) {
  for (var i = 1; i < arr.length; i++){
    for (var j = i; j > 0; j--){
	  if(arr[j] < arr[j - 1]) {
	    var temp = arr[j];
		arr[j] = arr[j - 1];
		arr[j - 1] = temp;
	  }
    }
  }
}
select(arr);
console.log(arr);
