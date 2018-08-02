CREATE TABLE mytable(
   id          INTEGER  NOT NULL PRIMARY KEY 
  ,name        VARCHAR(13) NOT NULL
  ,gender      VARCHAR(6) NOT NULL
  ,description VARCHAR(429) NOT NULL
  ,height      DATE  NOT NULL
  ,img         VARCHAR(28) NOT NULL
  ,hair        VARCHAR(5) NOT NULL
  ,eyes        VARCHAR(5) NOT NULL
  ,traits0     VARCHAR(8) NOT NULL
  ,traits1     VARCHAR(9) NOT NULL
  ,traits2     VARCHAR(12)
  ,traits3     VARCHAR(7)
);
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0001,'Nathan Hunt','Male','There''s more than meets the eye in the case of Nathan Hunt, but two things you''ll never forget are that hes energetic and protective. Of course he''s also clever, cooperative and active, but those are often overshadowed by tendencies of being crude as well.','5'' 11"','../images/profile-male.jpg','Brown','Hazel','funny','shy',NULL,NULL);
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0002,'Madison Doyle','Female','A lot can be said of Madison Doyle, but the biggest two things to know are that she''s romantic and exciting. Of course shes also active, focused and charismatic, but theyre tainted by and mixed with habits of being lazy as well.  Her romantic nature though, this is what she''s so well-liked for. People regularly count on this and her focus when they''re feeling down.','4'' 11"','../images/profile-female.jpg','White','Blue','Snarky','Witty','Comedic','Elderly');
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0003,'Owen Lane','Male','Few know the true Owen Lane, but the two traits most people enjoy the most are that he''s individualistic and organized. Of course he''s also reflective, forgiving and witty, but these are in a way balance by being egocentric as well.  His individualism though, this is what he''s often admired for. Friend''s tend to count on this and his intuition whenever they need cheering up.','6'' 1"','../images/profile-male.jpg','Bald','Blue','Serious','Bulky','Intimidating','Action');
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0004,'Ava Evans','Female','Many things can be said of Ava Evans, but at the very least you''ll find out shes spontaneous and playful. Of course she''s also contemplative, good-natured and enthusiastic, but in a way they''re lesser traits and tained by behaviors of being venomous as well.','5'' 5"','../images/profile-female.jpg','Black','Green','Composed','Quiet','Calming',NULL);
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0005,'Kayla Rogers','Female','Looks can be deceiving when it comes Kayla Rogers, but if there''s anything you should know it''s that she''s open and leaderly. Of course she''s also reflective, incorruptible and intuitive, but in a way they''re lesser traits and tained by behaviors of being hostile as well.  Her openness though, this is what she''s so well-liked for. There are many times when friends count on this and her energy whenever they need cheering up.','5'' 11"','../images/profile-male.jpg','Brown','Blue','Comedic','Side-kick',NULL,NULL);
INSERT INTO mytable(id,name,gender,description,height,img,hair,eyes,traits0,traits1,traits2,traits3) VALUES (0006,'Frankie Burke','Male','There''s more than meets the eye in the case of Frankie Burke, but at the very least you''ll find out hes dutiful and contemplative. Of course hes also lovable, gracious and honest, but in smaller doses and they''re often spoiled by habits of being agonizing as well. His dutiful nature though, this is what he''s kind of cherished for. There are many times when friends count on this and his insight when they''re in need of support.','6'' 1"','../images/profile-male.jpg','Black','Brown','Funny','Nerdy','Shy',NULL);
