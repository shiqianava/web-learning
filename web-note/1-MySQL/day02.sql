#设置客户端连接服务器端的编码为utf8
set names utf8;
#丢弃数据库，如果存在
drop database if exists xz;
#创建新的数据库，设置存储的编码为utf8
create database xz charset=utf8;
use xz;
create table user(
  uid int,
  uname varchar(32),
  upwd varchar(32),
  email varchar(32),
  phone varchar(11),
  userName varchar(8),
  isOnline varchar(1),
  regTime varchar(10) #2020-01-02
);
#插入数据
insert into user values('1','tao','123456','tao@126.com','18702583747','涛哥','y','2021-6-2');
insert into user values('2','dong','666666','dong@126.com','13960968705','东哥','n','2022-8-3');
insert into user values('3','hua','888888','hua@126.com','15288526325','华哥','y','2020-11-20');
#删除数据
delete from user where uid='2';
#修改数据
update user set upwd='666666',isOnline='n' where uid='3';

#查询数据，不能在脚本中写查询，会乱码
#select * from user where uid='1';