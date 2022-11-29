/*// 模板字符串
let title = '小米Air';
let os = 'Window 10';
let isOnsale = 1;
console.log(`
  商品名称：${title}
  操作系统：${os}
  是否在售：${isOnsale=== 1? '是':'否'}
`);
*/
const employ = {
  name: '李四',
  gender: 1,
  salary: 18000.00,
  departmentName: '销售部'
};

console.log(`
  姓名：${employ.name}
  性别：${employ.gender ? '男' : '女'}
  工资：${employ.salary.toFixed(2)}元
  部门：${employ.departmentName}
`);
var a = 1;
console.log(global.a);