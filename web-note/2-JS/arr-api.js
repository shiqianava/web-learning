var arr = [45, 36, 12, 89, 37, 56, 10, 123, 20, 563, 3, 22, 1];

/*var ret = arr.reverse(arr);
console.log(ret);
console.log(arr);*/

/*ret = arr.sort((a, b) => {
  console.log(a,b);
  return(a-b);
});
console.log(ret);
console.log(arr);*/

var arr = ['和谐福', '友善福'];
if (arr.indexOf('敬业福') === -1){
	arr.push('敬业福');
	arr.unshift('敬业福');
	console.log(arr);
}
var index = arr.indexOf('和谐福');
if (index !== -1){
	arr.splice(index, 1);
	console.log(arr)
}