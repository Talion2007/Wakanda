Create database Omnitrix
Use Omnitrix

Create table Users (
id int not null primary key identity,
name varchar(50) null,
age int null,
email varchar(150) null,
contact varchar(15)
)

select * from Users

insert into Users values ('Peter Parker', 20, 'miranha.secreto@gmail.com', '99999-9999')

delete from Users