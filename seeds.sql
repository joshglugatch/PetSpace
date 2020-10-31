

USE petSpace;
INSERT INTO users (username,password,createdAt,updatedAt) VALUES ("DogLover12","password",'2016-08-09 04:05:02','2016-08-09 04:05:02');

INSERT INTO users (username,password,createdAt,updatedAt) VALUES ("MeOWwww25","password",'2016-08-09 04:05:02','2016-08-09 04:05:02');

INSERT INTO users (username,password,createdAt,updatedAt) VALUES ("iLikeTurtles4","password",'2016-08-09 04:05:02','2016-08-09 04:05:02');

INSERT INTO posts (title,imageURL,animal,createdAt,updatedAt,userID) 
VALUES ("This dog is my favorite!","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/german-wirehaired-pointer-on-the-swamp-royalty-free-image-860979960-1560893464.jpg?crop=0.447xw:1.00xh;0.433xw,0&resize=980:*","dog",'2016-08-09 04:05:02','2016-08-09 04:05:02',1);

INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("OMG so cute!",'2016-08-09 04:05:02','2016-08-09 04:05:02',1,3);

INSERT INTO posts (title,imageURL,animal,createdAt,updatedAt,userID) 
VALUES ("Caturrito","https://static.india.com/wp-content/uploads/2015/11/089.jpg","cat",'2016-08-09 04:05:02','2016-08-09 04:05:02',2);

INSERT INTO posts (title,imageURL,animal,createdAt,updatedAt,userID) 
VALUES ("I like turtles...","https://api.timeforkids.com/wp-content/uploads/2020/04/turtle1.jpg?w=1455&h=970","other",'2016-08-09 04:05:02','2016-08-09 04:05:02',3);

INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("Omnomnomnom lol",'2016-08-09 04:05:02','2016-08-09 04:05:02',2,1);

INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("not as cool as turtles",'2016-08-09 04:05:02','2016-08-09 04:05:02',2,3);

INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("So floofy!",'2016-08-09 04:05:02','2016-08-09 04:05:02',1,2);
