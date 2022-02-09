create database Pets;
use Pets;

create table UserAccountProfile(
id int primary key not null auto_increment,
userName nvarchar(30) not null,
`password` nvarchar(300) not null,
FirstName nvarchar(25) not null,
LastName nvarchar(25) not null,
Contact nvarchar(60) not null,
Address nvarchar(60),
unique (userName)
);

select * from useraccountprofile;


create table UserPetProfile(
id int primary key not null auto_increment,
userID int,
WantedPet nvarchar(10) not null,
KidsAtHome nvarchar (10),
CurrentPetOwner nvarchar(20),
CurrentPetsAtHome nvarchar(20),
OutdoorSpace nvarchar (10),
LandlordPetRestrictions nvarchar(255),
foreign key(userID) references UserAccountProfile(id)
);


-- userID is the ID that is mentioned in the UserAccountProfile. So the value userID is related to that.
-- the animalID would basically come from the API. There is a class called Animal that has the Animal ID property.

create table Wishlist(
rowID int primary key not null auto_increment,
userID int,
animalID int,
 foreign key(userID) references UserAccountProfile(id)
);


-- won't be able to insert any type of data in this table unless the foreign key requirements are met.

create table Dog(
id int primary key not null auto_increment,
userID int,
breed nvarchar (50),
age nvarchar(15),
gender nvarchar (20),
size nvarchar (20),
color nvarchar(30),
coat nvarchar(30),
spayed nvarchar(30),
houseTrained nvarchar(30),
specialNeeds nvarchar(30),
shots nvarchar(30),
foreign key(userID) references UserAccountProfile(id)
);

create table Cat(
id int primary key not null auto_increment,
userID int,
breed nvarchar (50),
age nvarchar(20),
gender nvarchar (10),
size nvarchar (20),
color nvarchar(25),
coat nvarchar(20),
spayed nvarchar(30),
isDeclawed nvarchar(30),
houseTrained nvarchar(30),
specialNeeds nvarchar(30),
shots nvarchar(30),
foreign key(userID) references UserAccountProfile(id)
);


create table Adoption(
id int primary key not null auto_increment,
animalID int,
status nvarchar(15)
);



