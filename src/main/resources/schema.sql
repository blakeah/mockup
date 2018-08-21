CREATE TABLE actor (
   id          INTEGER  NOT NULL PRIMARY KEY
  ,name        VARCHAR(100) NOT NULL
  ,gender      VARCHAR(9) NOT NULL
  ,description VARCHAR(429) NULL
  ,height      VARCHAR(5) NOT NULL
  ,img         VARCHAR(255) NOT NULL
  ,hair        VARCHAR(20) NOT NULL
  ,eyes        VARCHAR(20) NOT NULL
  ,resume      VARCHAR(255) NOT NULL

);

CREATE TABLE trait (
    id      INTEGER NOT NULL PRIMARY KEY,
    description     VARCHAR(100) NOT NULL
);

CREATE TABLE actor_trait (
    actor_id INTEGER NOT NULL,
    trait_id INTEGER NOT NULL,
    primary key(actor_id, trait_id),
    index type_idx(trait_id),
    FOREIGN KEY (actor_id) REFERENCES actor(id) ON DELETE CASCADE,
    FOREIGN KEY (trait_id) REFERENCES trait(id) ON DELETE CASCADE
);
