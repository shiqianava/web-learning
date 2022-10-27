set names utf8;
drop database if exists sina;
create database sina charset=utf8;
use sina;
create table news(
  nid int,
  title varchar(32),
  ctime varchar(10),
  detail varchar(32),
  origin varchar(32)
);
insert into news values('1','枝江1号事件','2022-10-15','向晚猪猪','事实');
insert into news values('2','枝江2号事件','2022-10-16','贝拉憨憨','一眼真');
insert into news values('3','枝江3号事件','2022-10-17','嘉然短短','晚猪猪说的');
insert into news values('4','枝江4号事件','2022-10-18','乃琳可爱','我老婆');
insert into news values('5','测试','2022-10-18','测试','测试');

delete from news where nid='5';

update news set detail='乃琳可爱捏',origin='（这条5毛）' where nid='4';