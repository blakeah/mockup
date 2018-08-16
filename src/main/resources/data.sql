INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (1,'Nathan Hunt','Male','There''s more than meets the eye in the case of Nathan Hunt, but two things you''ll never forget are that hes energetic and protective. Of course he''s also clever, cooperative and active, but those are often overshadowed by tendencies of being crude as well.','5 11','../images/profile-male.jpg','Brown','Hazel');
INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (2,'Madison Doyle','Female','A lot can be said of Madison Doyle, but the biggest two things to know are that she''s romantic and exciting. Of course shes also active, focused and charismatic, but theyre tainted by and mixed with habits of being lazy as well.  Her romantic nature though, this is what she''s so well-liked for. People regularly count on this and her focus when they''re feeling down.','5 11','../images/profile-female.jpg','White','Blue');
INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (3,'Owen Lane','Male','Few know the true Owen Lane, but the two traits most people enjoy the most are that he''s individualistic and organized. Of course he''s also reflective, forgiving and witty, but these are in a way balance by being egocentric as well.  His individualism though, this is what he''s often admired for. Friend''s tend to count on this and his intuition whenever they need cheering up.','5 11','../images/profile-male.jpg','Bald','Blue');
INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (4,'Ava Evans','Female','Many things can be said of Ava Evans, but at the very least you''ll find out shes spontaneous and playful. Of course she''s also contemplative, good-natured and enthusiastic, but in a way they''re lesser traits and tained by behaviors of being venomous as well.','5 11','../images/profile-female.jpg','Brown','Hazel');
INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (5,'Kayla Rogers','Female','Looks can be deceiving when it comes Kayla Rogers, but if there''s anything you should know it''s that she''s open and leaderly. Of course she''s also reflective, incorruptible and intuitive, but in a way they''re lesser traits and tained by behaviors of being hostile as well.  Her openness though, this is what she''s so well-liked for. There are many times when friends count on this and her energy whenever they need cheering up.','5 11','../images/profile-female.jpg','Brown','Blue');
INSERT INTO actor(id,name,gender,description,height,img,hair,eyes) VALUES (6,'Frankie Burke','Male','There''s more than meets the eye in the case of Frankie Burke, but at the very least you''ll find out hes dutiful and contemplative. Of course hes also lovable, gracious and honest, but in smaller doses and they''re often spoiled by habits of being agonizing as well. His dutiful nature though, this is what he''s kind of cherished for. There are many times when friends count on this and his insight when they''re in need of support.','5 11','../images/profile-male.jpg','Brown','Blue');


INSERT INTO trait(id,description) VALUES (1, 'Grounded');
INSERT INTO trait(id,description) VALUES (2, 'silly');
INSERT INTO trait(id,description) VALUES (3, 'funny');
INSERT INTO trait(id,description) VALUES (4, 'stupid');
INSERT INTO trait(id,description) VALUES (5, 'something');
INSERT INTO trait(id,description) VALUES (6, 'Elderly');

INSERT INTO actor_trait(actor_id,trait_id)  VALUES (1, 1);
INSERT INTO actor_trait(actor_id,trait_id)  VALUES (1, 3);
INSERT INTO actor_trait(actor_id,trait_id)  VALUES (1, 4);
INSERT INTO actor_trait(actor_id,trait_id)  VALUES (1, 6);
