CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(320) UNIQUE NOT NULL,
  password VARCHAR(128) NOT NULL,
  role TEXT NOT NULL
);

INSERT INTO
  users (name, email, password, role)
VALUES
  (
    'Alexandrina Mehandzhiyska',
    'alexandrina.mehandzhiyska1@gmail.com',
    '$2b$10$Vdr37TXS1/kZZ3Y6nvJwiuOKz1B0ax7nEFQXIFvOuuAfFMGROtCmi',
    'owner'
  );

INSERT INTO
  users (name, email, password, role)
VALUES
  (
    'Ivan Ivanov',
    'ivan@abv.bg',
    '$2b$10$Vdr37TXS1/kZZ3Y6nvJwiuOKz1B0ax7nEFQXIFvOuuAfFMGROtCmi',
    'teacher'
  );

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  lecturer VARCHAR(50),
  textbook VARCHAR(70),
  lectures_link TEXT,
  duration INT,
  weekly_lectures INT
);

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  subject VARCHAR(70) NOT NULL,
  week_number INT NOT NULL,
  date DATE NOT NULL,
  course_id INT REFERENCES courses(id),
  time INT
);

INSERT INTO
  courses (
    start_date,
    end_date,
    lecturer,
    textbook,
    lectures_link,
    duration,
    weekly_lectures
  )
VALUES
  (
    '2022-01-04',
    '2022-01-28',
    'Sandy Smith',
    'Princeton SAT prep',
    'https://zoom.us',
    1,
    2
  ),
  (
    '2021-01-03',
    '2022-03-25',
    'Liam Finch',
    'Barrons SAT, 29th Edition',
    'https://zoom.us',
    3,
    2
  );

CREATE TABLE users_courses (
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  PRIMARY KEY (user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
);

INSERT INTO
  topics (title, subject, week_number, date, course_id)
VALUES
  (
    'Literature and History reading',
    'english',
    1,
    '2022-01-04',
    1
  ),
  (
    'Social passage and Science reading',
    'english',
    2,
    '2022-01-11',
    1
  ),
  (
    'Humanity writing passages',
    'english',
    3,
    '2022-01-18',
    1
  ),
  (
    'Science writing passages',
    'english',
    4,
    '2022-01-25',
    1
  ),
  ('Heart of algebra', 'math', 1, '2022-01-07', 1),
  (
    'Passport to Advanced Math',
    'math',
    2,
    '2022-01-14',
    1
  ),
  (
    'Problem Solving and Data Analysis',
    'math',
    3,
    '2022-01-21',
    1
  ),
  (
    'Additional Topics in Math',
    'math',
    4,
    '2022-01-28',
    1
  );

INSERT INTO
  topics (title, subject, week_number, date, course_id)
VALUES
  (
    'Linear equations and inequalities',
    'math',
    1,
    '2022-01-03',
    2
  ),
  (
    'Radicals and rational exponents',
    'math',
    2,
    '2022-01-10',
    2
  ),
  (
    'Nonlinear equation graphs',
    'math',
    3,
    '2022-01-17',
    2
  ),
  ('Functions', 'math', 4, '2022-01-24', 2),
  ('Percents', 'math', 5, '2022-01-31', 2),
  ('Table data', 'math', 6, '2022-02-07', 2),
  (
    'Key features of graphs',
    'math',
    7,
    '2022-02-14',
    2
  ),
  ('Data inferences', 'math', 8, '2022-02-21', 2),
  (
    'Data collection and conclusions',
    'math',
    9,
    '2022-02-28',
    2
  ),
  ('Right triangle', 'math', 10, '2022-03-07', 2),
  (
    'Circle theorems and equations',
    'math',
    11,
    '2022-03-14',
    2
  ),
  ('Practice Exam 1', 'math', 12, '2022-03-21', 2),

(
  'Quadratic equations and exponential word problems',
  'math',
  1,
  '2022-01-07',
  2
),
(
  'Polynomial factors and graphs',
  'math',
  2,
  '2022-01-14',
  2
),
(
  'Structure in expressions',
  'math',
  3,
  '2022-01-21',
  2
),
(
  'Rations, rates, and proportions',
  'math',
  4,
  '2022-01-28',
  2
),
('Units', 'math', 5, '04.02.2022', 2),
('Scatterplots', 'math', 6, '11.02.2022', 2),
(
  'Linear and exponential growth',
  'math',
  7,
  '2022-02-18',
  2
),
(
  'Center, spread, and shae of distributions',
  'math',
  8,
  '2022-02-25',
  2
),
(
  'Volume word problems',
  'math',
  9,
  '2022-03-04',
  2
),
(
  'Angles, arc lengths, and trig functions',
  'math',
  10,
  '2022-03-11',
  2
),
('Complex numbers', 'math', 11, '2022-03-18', 2),
('Practice Exam 2', 'math', 12, '2022-03-25', 2);

CREATE TABLE exams (
  id SERIAL PRIMARY KEY,
  subject TEXT NOT NULL,
  section VARCHAR(40) NOT NULL,
  duration INT NOT NULL,
  instructions VARCHAR(500) NOT NULL,
  text VARCHAR(2500),
  link TEXT,
  difficulty VARCHAR(40) NOT NULL
);

INSERT INTO
  exams (subject, section, duration, instructions, text, link, difficulty)
VALUES
  (
    'math',
    'nocalc',
    25,
    'Solve each problem, choose the best answer from the choices provided, and fill in the corresponding circle on your answer sheet.',
    NULL,
   NULL,
   'Medium'
  ),
  (
    'english',
    'reading',
    65,
    'The passage below is followed by a number of questions. After reading the passage, choose the best answer to each question based on what is stated or implied in the passage and in any accompanying graphics (such as a table or graph).',
    'Akira came directly, breaking all tradition. Was that it? Had he followed form? Had he asked his mother to speak to his father to approach a go between would Chie have been more receptive? He came on a winters eve. He pounded on the door while a cold rain beat on the shuttered veranda, so at first Chie thought him only the wind. The maid knew better. Chie heard her soft scuttling footsteps, the creak of the door. Then the maid brought a calling card to the drawing room, for Chie. Chie was reluctant to go to her guest; perhaps she was feeling too cozy. She and Naomi were reading at a low table set atop a charcoal brazier. A thick quilt spread over the sides of the table so their legs were tucked inside with the heat. "Who is it at this hour, in this weather?" Chie questioned as she picked the name card off the maids lacquer tray. "Shinoda, Akira. Kobe Dental College," she read. Naomi recognized the name. Chie heard a soft intake of air. "I think you should go," said Naomi.',
   NULL,
   'High'
  );

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  type TEXT DEFAULT 'radiogroup',
  title VARCHAR(100) NOT NULL,
  correct_answer VARCHAR(200) NOT NULL,
  exam_id INT REFERENCES exams(id)
);

INSERT INTO
  questions (title, correct_answer, exam_id)
VALUES
  (
    'Which choice best describes what happens in the passage?',
    'One character receives a surprising request from another character',
    2
  ),
  (
    'Which choice best describes the developmental pattern of the passage?',
    'A detailed depiction of a meaningful encounter',
    2
  ),
  (
    'As used in line 1 and line 65, "directly" most nearly means',
    'without mediation.',
    2
  ),
  (
    'Which reaction does Akira most fear from Chie?',
    'She will consider his proposal inappropriate.',
    2
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    'Lines 63-64 ("Please... proposal")',
    2
  ),
  (
    'In the passage, Akira addresses Chie with',
    'respect but not utter deference.',
    2
  ),
  (
    'The main purpose of the first paragraph is to',
    'analyze a reaction.',
    2
  ),
  (
    'As used in line 2, "form" most nearly means',
    'custom.',
    2
  ),
  (
    'Why does Akira say his meeting with Chie is "a matter of urgency" (line 32)?',
    'He has been offered an attractive job in another country.',
    2
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    ' Lines 39-42 ("Normally... community")',
    2
  );

INSERT INTO
  questions (title, correct_answer, exam_id)
VALUES
  (
    '3 + 5 = ?',
    '8',
    1
  ),
  (
    '1 + 4 = ?',
    '5',
    1
  ),
  (
    '3 x 5 = ?',
    '15',
    1
  ),
  (
    '1 x 1 = ?',
    '1',
    1
  ),
  (
    '16 / 2 = ?',
    '8',
    1
  ),
  (
    '15 / 3 = ?',
    '5',
    1
  ),
  (
    '43 + 5 = ?',
    '48',
    1
  ),
  (
    '30 - 5 = ?',
    '25',
    1
  ),
  (
    '56 + 4 = ?',
    '60',
    1
  ),
  (
    '5^2',
    '25',
    1
  );








CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  content VARCHAR(200) NOT NULL,
  question_id INT REFERENCES questions(id)
);

CREATE TABLE users_exams (
  user_id INT NOT NULL,
  exam_id INT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (user_id, exam_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (exam_id) REFERENCES exams(id) ON UPDATE CASCADE
);

INSERT INTO
  answers (content, question_id)
VALUES
  (
    'One character argues with another character who intrudes on her home.',
    1
  ),
  (
    'One character receives a surprising request from another character.',
    1
  ),
  (
    'One character reminisces about choices she has made over the years.',
    1
  ),
  (
    'One character criticizes another character for pursuing an unexpected course of action.',
    1
  ),
  (
    'A careful analysis of a traditional practice',
    2
  ),
  (
    'A detailed depiction of a meaningful encounter',
    2
  ),
  (
    'A definitive response to a series of questions',
    2
  ),
  (
    'A cheerful recounting of an amusing anecdote',
    2
  ),
  ('frankly.', 3),
  ('confidently.', 3),
  ('without mediation.', 3),
  ('with precision.', 3),
  (
    'She will consider his proposal inappropriate.',
    4
  ),
  (
    'She will mistake his earnestness for immaturity.',
    4
  ),
  (
    'She will consider his unscheduled visit an imposition.',
    4
  ),
  (
    'She will underestimate the sincerity of his emotions.',
    4
  ),
  ('Line 33 ("His voice... refined")', 5),
  ('Lines 49-51 ("You... mind")', 5),
  ('Lines 63-64 ("Please... proposal")', 5),
  ('Lines 71-72 ("Eager... face")', 5),
  ('affection but not genuine love.', 6),
  ('objectivity but not complete impartiality.', 6),
  ('amusement but not mocking disparagement.', 6),
  ('respect but not utter deference.', 6),
  ('describe a culture.', 7),
  ('criticize a tradition.', 7),
  ('question a suggestion.', 7),
  ('analyze a reaction.', 7),
  ('appearance.', 8),
  ('custom.', 8),
  ('structure.', 8),
  ('nature.', 8),
  (
    'He fears that his own parents will disapprove of Naomi.',
    9
  ),
  (
    'He worries that Naomi will reject him and marry someone else.',
    9
  ),
  (
    'He has been offered an attractive job in another country.',
    9
  ),
  (
    'He knows that Chie is unaware of his feelings for Naomi.',
    9
  ),
  ('Line 39 ("I dont... you")', 10),
  ('Lines 39-42 ("Normally... community")', 10),
  ('Lines 58-59 ("Depending... Japan")', 10),
  ('Lines 72-73 ("I see... you")', 10);

INSERT INTO
  answers (content, question_id)
VALUES
  (
    '8',
    11
  ),
  (
    '5',
    11
  ),
  (
    '3',
    11
  ),
  (
    '10',
    11
  ),
  (
    '5',
    12
  ),
  (
    '3',
    12
  ),
  (
    '25',
    12
  ),
  (
    '34',
    12
  ),
  ('15', 13),
  ('4', 13),
  ('54', 13),
  ('1', 13),
  (
    '1',
    14
  ),
  (
    '3',
    14
  ),
  (
    '5',
    14
  ),
  (
    '20',
    14
  ),
  ('8', 15),
  ('13', 15),
  ('14', 15),
  ('-3', 15),
  ('5', 16),
  ('3', 16),
  ('67', 16),
  ('43', 16),
  ('48', 17),
  ('3', 17),
  ('43', 17),
  ('10', 17),
  ('25', 18),
  ('54', 18),
  ('4.', 18),
  ('43', 18),
  (
    '60',
    19
  ),
  (
    '3',
    19
  ),
  (
    '43',
    19
  ),
  (
    '5',
    19
  ),
  ('25', 20),
  ('65', 20),
  ('3', 20),
  ('43', 20);


ALTER TABLE
  questions DROP CONSTRAINT questions_exam_id_fkey,
ADD
  CONSTRAINT questions_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE;

ALTER TABLE
  users_exams DROP CONSTRAINT users_exams_exam_id_fkey,
ADD
  CONSTRAINT users_exams_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE;

ALTER TABLE
  answers DROP CONSTRAINT answers_question_id_fkey,
ADD
  CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE;


INSERT INTO questions (title, correct_answer, exam_id)
VALUES
(
  'Which is the correct option?',
  'outweigh',
  4
),
(
  'Which choice provides the most relevant detail?',
  'supplement and convert it into gas to use as fuel in electricity production.',
  4
),
(
  'Which is the correct option?',
  'NO CHANGE',
  4
),
(
  'Thich is the correct option?',
  'scientists, and',
  4
),
(
  'To make this paragraph most logical, sentence 5 should be placed',
  'after sentence 2',
  4
),
(
  'The writer is considering deleting the underlined sentence. Should the writer do this?',
  'No, because it sets up the argument in the paragraph for the benefits of Greek yogurt.',
  4
),
(
  'Which is the correct option?',
  'as',
  4
),
(
  'Which is the correct option?',
  'contains',
  4
),
(
  'Which is the correct option?',
  'NO CHANGE',
  4
),
(
  'Which is the correct option?',
  'NO CHANGE',
  4
);

INSERT INTO answers (content, question_id)
VALUES
('NO CHANGE', 71),
('defeat', 71),
('outperform', 71),
('outweigh', 71),
('NO CHANGE', 72),
('supplement and convert it into gas to use as fuel in electricity production.', 72),
('supplement, while sweet whey is more desirable as a food additive for humans.', 72),
('supplement, which provides an important element of their diet', 72),
('NO CHANGE', 73),
('can pollute waterway''s,', 73),
('could have polluted waterways,', 73),
('has polluted waterway''s,', 73),
('NO CHANGE', 74),
('scientists: and', 74),
('scientists, and', 74),
('scientists, and,', 74),
('where it is now.', 75),
('after sentence 1.', 75),
('after sentence 2.', 75),
('after sentence 3.', 75),
('Yes, because it does not provide a transition from the previous paragraph.', 76),
('Yes, because it fails to support the main argument of the passage as introduced in the first paragraph.', 76),
('No, because it continues the explanation of how acid whey can be disposed of safely.', 76),
('No, because it sets up the argument in the paragraph for the benefits of Greek yogurt.', 76),
('NO CHANGE', 77),
('as', 77),
('like', 77),
('for', 77),
('NO CHANGE', 78),
('conatining', 78),
('contains', 78),
('will contain', 78),
('NO CHANGE', 79),
('In other words,', 79),
('Therefore,', 79),
('For instance,', 79),
('NO CHANGE', 80),
('fulfilled', 80),
('complacent', 80),
('sufficient', 80);

UPDATE exams
SET text = 'Akira came directly, breaking all tradition. Was that it? Had he followed form—had he asked his mother to speak to his father to approach a go-between—would Chie have been more receptive? He came on a winter''s eve. He pounded on the door while a cold rain beat on the shuttered veranda, so at first Chie thought him only the wind. The maid knew better. Chie heard her soft scuttling footsteps, the creak of the door. Then the maid brought a calling card to the drawing room, for Chie. Chie was reluctant to go to her guest; perhaps she was feeling too cozy. She and Naomi were reading at a low table set atop a charcoal brazier. A thick quilt spread over the sides of the table so their legs were tucked inside with the heat. "Who is it at this hour, in this weather?" Chie questioned as she picked the name card off the maid''s lacquer tray. "Shinoda, Akira. Kobe Dental College," she read. Naomi recognized the name. Chie heard a soft intake of air. "I think you should go," said Naomi. Akira was waiting in the entry. He was in his early twenties, slim and serious, wearing the black military-style uniform of a student. As he bowed—his hands hanging straight down, a black cap in one, a yellow oil-paper umbrella in the other—Chie glanced beyond him. In the glistening surface of the courtyard''s rain-drenched paving stones, she saw his reflection like a dark double. "Madame," said Akira, "forgive my disruption, but I come with a matter of urgency." His voice was soft, refined. He straightened and stole a deferential peek at her face. In the dim light his eyes shone with sincerity. Chie felt herself starting to like him. "Come inside, get out of this nasty night. Surely your business can wait for a moment or two." "I don''t want to trouble you. Normally I would approach you more properly but I''ve received word of a position. I''ve an opportunity to go to America, as dentist for Seattle''s Japanese community." "Congratulations," Chie said with amusement. "That is an opportunity, I''m sure. But how am I involved?" Even noting Naomi''s breathless reaction to the name card, Chie had no idea. Akira''s message, delivered like a formal speech, filled her with maternal amusement. You know how children speak so earnestly, so hurriedly, so endearingly about things that have no importance in an adult''s mind? That''s how she viewed him, as a child. It was how she viewed Naomi. Even though Naomi was eighteen and training endlessly in the arts needed to make a good marriage, Chie had made no effort to find her a husband. Akira blushed. "Depending on your response, I may stay in Japan. I''ve come to ask for Naomi''s hand." Suddenly Chie felt the dampness of the night. "Does Naomi know anything of your... ambitions?" "We have an understanding. Please don''t judge my candidacy by the unseemliness of this proposal. I ask directly because the use of a go-between takes much time. Either method comes down to the same thing: a matter of parental approval. If you give your consent, I become Naomi''s yoshi. We''ll live in the House of Fuji. Without your consent, I must go to America, to secure a new home for my bride." Eager to make his point, he''d been looking her full in the face. Abruptly, his voice turned gentle. "I see I''ve startled you. My humble apologies. I''ll take no more of your evening. My address is on my card. If you don''t wish to contact me, I''ll reapproach you in two weeks'' time. Until then, good night." He bowed and left. Taking her ease, with effortless grace, like a cat making off with a fish. "Mother?" Chie heard Naomi''s low voice and turned from the door. "He has asked you?" The sight of Naomi''s clear eyes, her dark brows gave Chie strength. Maybe his hopes were preposterous. "Where did you meet such a fellow? Imagine! He thinks he can marry the Fuji heir and take her to America all in the snap of his fingers!" Chie waited for Naomi''s ripe laughter. Naomi was silent. She stood a full half minute looking straight into Chie''s eyes. Finally, she spoke. "I met him at my literary meeting." Naomi turned to go back into the house, then stopped. "Mother." "Yes?" "I mean to have him."'
WHERE id = 2;

ALTER TABLE questions
ADD COLUMN explanation VARCHAR(1000);

UPDATE questions
SET explanation = 'In the passage, a young man (Akira) asks a mother (Chie) for permission to marry her daughter (Naomi). The request was certainly surprising to the mother, as can be seen from line 47, which states that prior to Akira''s question Chie "had no idea" the request was coming. Choice A is incorrect because the passage depicts two characters engaged in a civil conversation, with Chie being impressed with Akira''s "sincerity" and finding herself "starting to like him." Choice C is incorrect because the passage is focused on the idea of Akira''s and Naomi''s present lives and possible futures. Choice D is incorrect because the interactions between Chie and Akira are polite, not critical; for example, Chie views Akira with "amusement," not animosity.'
WHERE id = 1;
 
UPDATE questions
SET explanation = 'The passage centers on a night when a young man tries to ge tapproval to marry a woman''s daughter. The passage includes detailed descriptions of setting (a "winter''s eve" and a "cold rain," lines 5-6); character (Akira''s "soft, refined" voice, line 33; Akira''s eyes "shining with sincerity," line 35); and plot ("Naomi was silent. She stood a full half minute looking straight into Chie''s eyes. Finally, she spoke,", lines 88-89). Choice A is incorrect because the passage focuses on a nontraditional marriage proposal. Choice C is incorrect because the passage concludes without resolution to the question of whether Akira and Naomi will receive permission to marry. Choice D is incorrect becuase the passage repeatedly makes clear that for Chie, her encounter with Akira is momentous and unsettling, as when Akira acknowledges in line 73 that he has "startled" her.'
WHERE id = 2;
 
UPDATE questions
SET explanation = 'Akira "came directly, breaking all tradition," (line 1) when he approached Chie and asked to maryr her daughter, and he "asked directly,", without "a go-between" (line 65) or "mediation," because doing otherwise would have taken too much time. Choices A, B, and D are incorrect because in these contexts, "directly" does not mean in a frank, confident, or precise manner.'
WHERE id = 3;
  
UPDATE questions
SET explanation = 'Choice A is the best answer. Akira is very concerned Chie will find his marriage proposal inappropriate because he did not follow traditional protocol and use a "go-between" (line 65). This is clear in lines 63-64, when Akira says to Chie "Please don''t judge my candidacy by the unseemliness of this proposal." Choice B is incorrect because there is no evidence in the passage that Akira worries that Chie will mistake his earnestness for immaturity. Choice C is incorrect because while Akira recognizes that his unscheduled visit is a nuisance, his larger concern is that Chie will reject him due to the inappropriateness of his proposal. Choice D is incorrect because there is no evidence in the passage that Akira worries Chie will underestimate the sincerity of his emotions.'
WHERE id = 4;
 
UPDATE questions
SET explanation = 'In lines 63-63, Akira says to Chie, "Please don''t judge my candidacy by the unseemliness of this proposal." This reveals Akira''s concern that Chie may say no to the proposal simply because  Akira did not follow traditional practices. Choices A, B, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because line 33 merely describes Akirs''s voice as "soft, refined." Choice B is incorrect because lines 49-51 reflect Chie''s perspective, not Akira''s. Choice D is incorrect because lines 71-72 indicate only that Akira was speaking in an eager and forthright matter.'
WHERE id = 5;
 
UPDATE questions
SET explanation = 'Akira clearly treats Chie with respect, including "bowing" (line 26) to her, calling her "Madame" (line 31), and looking at her with "a deferential peek" (line 34). Akira does not offer Chie utter deference, though, as he asks to marry Naomi after he concedes that he is not following protocol and admits to being a "disruption" (line 31)'
WHERE id = 6;
 
UPDATE questions
SET explanation = 'The first paragraph (lines 1-4) reflects on how Akira approached Chie to ask for her daughter''s hand in marriage. In these lines, tha narrator is wondering whether Chie would have been more likely to say yes to Akira''s proposal if Akira had followed tradition: "Akira came directly, breaking all tradition. Was that it? Had he followed form - had he asked his mother to speak to his father to approach a go-between - would Chie have been more receptive?" Thus, the main purpose of the first paragraph is to examine why Chie reacted a certain way to Akira''s proposal. Choice A is incorrect because the first paragraph describes only one aspect of Japanese culture (marriage proposals) but not the culture as a whole. Choice B is incorrect because the first paragraph implies a criticism of Akira''s individual marriage proposal but not the entire tradition of Japanese marriage proposals. Choice C is incorrect because the narrator does not question a suggestion.'
WHERE id = 7;
 
UPDATE questions
SET explanation = 'In line 1, the narrator suggests that Akira''s direct approach broke "all tradition." The narrator then wonders if Akira had "followed form," or the tradition expected of him, would Chie have been more receptive to his proposal. In this context, following "form" thus means following a certain tradition or custom. Choices A, C, and D are incorrect because in this context "form" does not mean the way something looks (appearance), the way it is built (structure), or its essence (nature).'
WHERE id = 8;
 
 
UPDATE questions
SET explanation = 'Akira states that his unexpected meeting with Chie occured only because of a "matter of urgency," which he explains as "an opportunity to go to America, as dentist for Seattle''s Japanese community" (lines 41-42). Akira decides to directly speak to Chie because Chie''s response to his marriage proposal affects whether Akira accepts the job offer. Choice A is incorrect because there is no evidence in the passage that Akira is worried his parents will not approve of Naomi. Choice B is incorrect because Akira has "an understanding" with Naomi (line 63). Choice D is incorrect; while Akira may know that Chie is unaware of his feelings for Naomi, this is not what he is referring to when he mentions "a matter of urgency."'
WHERE id = 9;
 
UPDATE questions
SET explanation = 'In lines 39-42, Akira clarifies that the "matter of urgency" is that he has "an opportunity to go to America, as dentist for Seattle''s Japanese community." Akira needs Chie''s answer to his marriage proposal so he can decide whether to accept the job in Seattle. Choices A, C, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because in line 39 Akira apologizes for interrupting Chie''s quiet evening. Choice C is incorrect because lines 58-59 address the seriousness of Akira''s request, not its urgenty. Choice D is incorrect because line 73 shows only that Akira''s proposal has "startled" Chie and does not explain why his request is time-sensitive'
WHERE id = 10;
 
 