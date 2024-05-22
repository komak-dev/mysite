-- CREATE TABLE IF NOT EXISTS comments (
--   id integer PRIMARY KEY AUTOINCREMENT,
--   author text NOT NULL,
--   body text NOT NULL,
--   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- INSERT INTO comments (author, body) VALUES 
-- ('Alfreds Futterkiste', 'Maria Anders'), 
-- ('Around the Horn', 'Thomas Hardy'), 
-- ('Bs Beverages', 'Victoria Ashworth'), 
-- ('Bs Beverages', 'Random Name');

CREATE TABLE IF NOT EXISTS posts (
    id integer  PRIMARY KEY AUTOINCREMENT,
    content text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN
);
INSERT INTO posts (content,is_published) VALUES
("post1",true),
("post2",false);