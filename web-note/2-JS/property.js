/*var student = {
  name: 'aa',
  studentID: '1002'
};

console.log(student.name === undefined);
console.log(student.hasOwnProperty('name'));
console.log('name' in student);*/

var commodity = {
  cid: '1',
  title: '联想电脑',
  price: 100
};
if ('price' in commodity) {
  commodity.price = commodity.price * 0.9;
}
if (!commodity.hasOwnProperty('origin')){
  commodity['origin'] = '地球';
}
for (var k in commodity ){
  console.log(k, commodity[k]);
}