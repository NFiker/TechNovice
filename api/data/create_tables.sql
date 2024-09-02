-- Suppression des tables existantes
DROP TABLE IF EXISTS WATCHES;
DROP TABLE IF EXISTS COMMENTS;
DROP TABLE IF EXISTS TOPICS;
DROP TABLE IF EXISTS COURSES;
DROP TABLE IF EXISTS USERS;


-- Table USERS
CREATE TABLE USERS (
 user_code SERIAL PRIMARY KEY,
 nickname VARCHAR(42) UNIQUE NOT NULL,
 mail VARCHAR(42) UNIQUE NOT NULL, 
 password VARCHAR(20) NOT NULL,
 first_name VARCHAR(42) NOT NULL,
 last_name VARCHAR(42) NOT NULL,
 role_name VARCHAR(20) NOT NULL DEFAULT 'Utilisateur'
 );


-- Table COURSES
CREATE TABLE COURSES (
 course_code SERIAL PRIMARY KEY,
 course_title VARCHAR(255) UNIQUE NOT NULL,
 course_desc TEXT NOT NULL,
 course_tags VARCHAR(20)[] NOT NULL,
 course_content TEXT NOT NULL,
 creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 update_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 author_user_code INT NOT NULL,
 FOREIGN KEY (author_user_code) REFERENCES USERS(user_code)
);


-- Table TOPICS
CREATE TABLE TOPICS (
 topic_code SERIAL PRIMARY KEY,
 topic_title VARCHAR(255) NOT NULL,
 topic_tag VARCHAR(20) NOT NULL,
 topic_content TEXT NOT NULL,
 topic_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 author_user_code INT NOT NULL,
 FOREIGN KEY (author_user_code) REFERENCES USERS(user_code)
 );


-- Table COMMENTS (table d'association entre USERS et TOPICS)
CREATE TABLE COMMENTS (
 com_code SERIAL PRIMARY KEY,
 com_content TEXT NOT NULL,
 com_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 author_user_code INT NOT NULL,
 topic_code INT NOT NULL,
 FOREIGN KEY (author_user_code) REFERENCES USERS(user_code),
 FOREIGN KEY (topic_code) REFERENCES TOPICS(topic_code)
);


-- Table WATCHES (table d'association entre COURSES et USERS)
CREATE TABLE WATCHES (
 course_code INT NOT NULL,
 author_user_code INT NOT NULL,
 start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (course_code, author_user_code),
 FOREIGN KEY (course_code) REFERENCES COURSES(course_code),
 FOREIGN KEY (author_user_code) REFERENCES USERS(user_code)
);
