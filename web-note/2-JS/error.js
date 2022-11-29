var age = 76;
try{
  if (age > 60 || age < 18){
      throw '非法的年龄';
  }
} catch(err) {
  console.log(err);
}
