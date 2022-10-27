set names utf8;
drop database if exists xz;
create database xz charset=utf8;
use xz;
create table family(
  fid int primary key,
  fname varchar(16) unique default '未知'
);
insert into family values
(40,'戴尔'),
(20,'联想'),
(10,'小米');
insert into family values(30,'华为');
insert into family values(50,'ThinkPad');
insert into family values(60,'MacBook');
insert into family(fid) values(70);

create table laptop(
  lid int primary key auto_increment,
  title varchar(128),
  price decimal(7,2) default 99999.99,
  spec varchar(64),
  detail varchar(5000),
  shelfTime date,
  isOnsale boolean,
  familyId int,
  #将familyId设置为外键列，取值范围在family表的id
  foreign key(familyId) references family(fid)
);
insert into laptop values(1,'小米Air',4199,'2021年新款','详情1','2021-1-1',1,10);
insert into laptop values(2,'戴尔Air',5199,'流光银','详情2','2020-10-18',0,40);
insert into laptop values(3,'联想Air',6199,'电竞版','详情3','2022-5-1',0,20);
insert into laptop values(4,'华为Air',7199,'超薄本','详情4','2021-5-28',1,30);
#使用default关键字应用默认值
insert into laptop values(5,'ThinkPad',default,'学习本',default,'2021-6-28',1,50);
#应用默认值
insert into laptop(lid,title,familyId) values(6,'Apple,MacBook',60);
insert into laptop(lid,title,familyId) values(null,'Apple,MacBook',60);