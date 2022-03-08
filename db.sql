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
  topics (title, subject, week_number, date, course_id)
VALUES
  ('Integrals', 'math', 1, '2021-12-03', 1),
  (
    'Subject-verb agreement',
    'english',
    1,
    '2021-12-05',
    1
  ),
  (
    'Differential equations',
    'math',
    2,
    '2021-12-20',
    1
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

SELECT
  start_date,
  end_date,
  title
FROM
  courses
  JOIN topics ON topics.course_id = courses.id
WHERE
  week_number = 1;

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
  link TEXT
);

INSERT INTO
  exams (subject, section, duration, instructions)
VALUES
  (
    'math',
    'nocalc',
    25,
    'Solve each problem, choose the best answer from the choices provided, and fill in the corresponding circle on your answer sheet.'
  ),
  (
    'math',
    'calc',
    55,
    'solve each problem, choose the best answer from the choices provided, and fill in the corresponding circle on your answer sheet.'
  );

  INSERT INTO
  exams (subject, section, duration, instructions, text)
VALUES
  (
    'english',
    'reading',
    65,
    'The passage below is followed by a number of questions. After reading the passage, choose the best answer to each question based on what is stated or implied in the passage and in any accompanying graphics (such as a table or graph).',
    'Akira came directly, breaking all tradition. Was that it? Had he followed form? Had he asked his mother to speak to his father to approach a go between would Chie have been more receptive? He came on a winters eve. He pounded on the door while a cold rain beat on the shuttered veranda, so at first Chie thought him only the wind. The maid knew better. Chie heard her soft scuttling footsteps, the creak of the door. Then the maid brought a calling card to the drawing room, for Chie. Chie was reluctant to go to her guest; perhaps she was feeling too cozy. She and Naomi were reading at a low table set atop a charcoal brazier. A thick quilt spread over the sides of the table so their legs were tucked inside with the heat. "Who is it at this hour, in this weather?" Chie questioned as she picked the name card off the maids lacquer tray. "Shinoda, Akira. Kobe Dental College," she read. Naomi recognized the name. Chie heard a soft intake of air. "I think you should go," said Naomi.'
  ),
  (
    'english',
    'writing',
    35,
    'The passage below is accompanied by a number of questions. For some questions, you will consider how the passage might be revised to improve the expression of ideas. For other questions, you will consider how the passage might be edited to correct errors in sentence structure, usage, or punctuation. A passage or a question may be accompanied by one or more graphics (such as a table or graph) that you will consider as you make revising and editing decisions.',
    'Greek yogurt—a strained form of cultured yogurt—has grown enormously in popularity in the United States since it was first introduced in the country in the late 1980s. From 2011 to 2012 alone, sales of Greek yogurt in the US increased by 50 percent. The resulting increase in Greek yogurt production has forced those involved in the business to address the detrimental effects that the yogurt-making process may be having on the environment. Fortunately, farmers and others in the Greek yogurt business have found many methods of controlling and eliminating most environmental threats. Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt outdo the potential drawbacks of its production. The main environmental problem caused by the production of Greek yogurt is the creation of acid whey as a by-product. Because it requires up to four times more milk to make than conventional yogurt does, Greek yogurt produces larger amounts of acid whey, which is difficult to dispose of. To address the problem of disposal, farmers have found a number of uses for acid whey. [4] They can add it to livestock feed as a protein supplement, and people can make their own Greek-style yogurt at home by straining regular yogurt. If it is improperly introduced into the environment, acid-whey runoff can pollute waterways, depleting the oxygen content of streams and rivers as it decomposes. Yogurt manufacturers, food scientists; and government officials are also working together to develop additional solutions for reusing whey.'
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
    4
  ),
  (
    'Which choice best describes the developmental pattern of the passage?',
    'A detailed depiction of a meaningful encounter',
    4
  ),
  (
    'As used in line 1 and line 65, "directly" most nearly means',
    'without mediation.',
    4
  ),
  (
    'Which reaction does Akira most fear from Chie?',
    'She will consider his proposal inappropriate.',
    4
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    'Lines 63-64 ("Please... proposal")',
    4
  ),
  (
    'In the passage, Akira addresses Chie with',
    'respect but not utter deference.',
    4
  ),
  (
    'The main purpose of the first paragraph is to',
    'analyze a reaction.',
    4
  ),
  (
    'As used in line 2, "form" most nearly means',
    'custom.',
    4
  ),
  (
    'Why does Akira say his meeting with Chie is "a matter of urgency" (line 32)?',
    'He has been offered an attractive job in another country.',
    4
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    ' Lines 39-42 ("Normally... community")',
    4
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