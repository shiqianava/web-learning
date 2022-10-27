#设置客户端连接服务器端的编码
set names utf8;
#丢弃数据库，如果存在
drop database if exists xuezi;
#创建数据库，设置存储的编码
create database xuezi charset=utf8;
#进入创建的数据库
use xuezi;
#创建数据表
create table laptop(
  lid int primary key,
  title varchar(3) unique,
  price decimal(7,2) not null,
  stockCount smallint,
  shelfTime date,
  isOnsale bool  #bool本质就是tinyint，取值范围也一样
);
#插入数据
insert into laptop values('2','小米air','5299',null,null,true);
insert into laptop values('1','华为air','4199.99','2112','2019-8-9',false);
insert into laptop values('4','苹果air','6999.99','2112','2020-8-9',1);
insert into laptop values(3,'戴尔air',6999.99,2112,'2020-8-9',0);