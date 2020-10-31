USE petSpace;
INSERT INTO users (username,password,createdAt,updatedAt) VALUES ("josh","password",'2016-08-09 04:05:02','2016-08-09 04:05:02');
​
INSERT INTO posts (title,imageURL,animal,createdAt,updatedAt,userID) 
VALUES ("test title","https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg","dog",'2016-08-09 04:05:02','2016-08-09 04:05:02',1);
​
INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("test comment",'2016-08-09 04:05:02','2016-08-09 04:05:02',1,1);
​
INSERT INTO posts (title,imageURL,animal,createdAt,updatedAt,userID) 
VALUES ("test 2","https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg","cat",'2016-08-09 04:05:02','2016-08-09 04:05:02',1);
​
INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("test 2 comment",'2016-08-09 04:05:02','2016-08-09 04:05:02',2,1);
​
INSERT INTO comments (comment,createdAt,updatedAt,postID,userID) 
VALUES ("test 3 comment",'2016-08-09 04:05:02','2016-08-09 04:05:02',2,1);
