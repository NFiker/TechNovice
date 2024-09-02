-- Remplir la table USERS
INSERT INTO USERS (nickname, mail, password, first_name, last_name, role_name)
VALUES 
('jdoe', 'jdoe@example.com', 'password123', 'John', 'Doe', 'Utilisateur'),
('asmith', 'asmith@example.com', 'securepass', 'Alice', 'Smith', 'Utilisateur'),
('bwhite', 'bwhite@example.com', 'white1234', 'Bob', 'White', 'Administrateur'),
('jblack', 'jblack@example.com', 'blackpass', 'Julie', 'Black', 'Utilisateur'),
('mkent', 'mkent@example.com', 'superman', 'Mary', 'Kent', 'Formateur');

-- Remplir la table COURSES
INSERT INTO COURSES (course_title, course_desc, course_tags, course_content, author_user_code)
VALUES 
('Introduction to SQL', 'Learn the basics of SQL', ARRAY['SQL', 'Database'], 'SQL content here...', 1),
('Advanced Python', 'Deep dive into Python programming', ARRAY['Python', 'Programming'], 'Python content here...', 3),
('Web Development 101', 'Learn how to create websites', ARRAY['HTML', 'CSS', 'JavaScript'], 'Web dev content here...', 2);

-- Remplir la table TOPICS
INSERT INTO TOPICS (topic_title, topic_tag, topic_content, author_user_code)
VALUES 
('SQL Joins Explained', 'SQL', 'Discussion about SQL joins...', 1),
('Python Decorators', 'Python', 'Let\'s talk about decorators in Python...', 3),
('Best HTML practices', 'HTML', 'What are the best practices in HTML?', 2);

-- Remplir la table COMMENTS
INSERT INTO COMMENTS (com_content, author_user_code, topic_code)
VALUES 
('Great explanation, thanks!', 2, 1),
('I found this very helpful.', 1, 2),
('Can you explain more about attributes?', 4, 3);

-- Remplir la table WATCHES
INSERT INTO WATCHES (course_code, author_user_code)
VALUES 
(1, 2),
(2, 1),
(3, 4),
(1, 3),
(2, 5);