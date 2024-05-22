DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS tag_connections;


CREATE TABLE posts(
    id integer PRIMARY KEY AUTOINCREMENT,
    title text NOT NULL,
    content text NOT NULL,
    is_published BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trigger_post_updated_at AFTER UPDATE ON posts
BEGIN
    UPDATE posts SET updated_at = CURRENT_TIMESTAMP WHERE rowid == NEW.rowid;
END;

CREATE TABLE tags(
    id integer PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE tag_connections(
    id integer PRIMARY KEY AUTOINCREMENT,
    post_id integer,
    tag_id integer,
    FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags (id)
);