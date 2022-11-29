/*let timer = setTimeout(() => {
  console.log('aa');
},2000);
//clearTimeout(timer);
let timer2 = setInterval(() => {
  console.log('1');
},1000);
clearInterval(timer2);*/
setImmediate(() => {
  console.log(1);
});

process.nextTick(() => {
  console.log(3);
});
process.nextTick(() => {
  console.log(4);
});
setImmediate(() => {
  console.log(5);
});
console.log(2);