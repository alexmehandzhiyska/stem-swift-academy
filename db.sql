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
  ),
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
  ('Practice Exam 1', 'math', 12, '2022-03-21', 2);

CREATE TABLE exams (
  id SERIAL PRIMARY KEY,
  type VARCHAR(60) NOT NULL,
  subject TEXT NOT NULL,
  section VARCHAR(40) NOT NULL,
  duration INT NOT NULL,
  instructions VARCHAR(500) NOT NULL,
  text VARCHAR(5000),
  link TEXT,
  difficulty VARCHAR(40) NOT NULL
);

INSERT INTO
  exams (type, subject, section, duration, instructions, text, link, difficulty)
VALUES
  (
    'sat',
    'math',
    'nocalc',
    25,
    'Solve each problem, choose the best answer from the choices provided, and fill in the corresponding circle on your answer sheet.',
    NULL,
   'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
   'Medium'
  ),
  (
    'sat',
    'english',
    'reading',
    65,
    'The passage below is followed by a number of questions. After reading the passage, choose the best answer to each question based on what is stated or implied in the passage and in any accompanying graphics (such as a table or graph).',
    'Akira came directly, breaking all tradition. Was that it? Had he followed form—had he asked his mother to speak to his father to approach a go-between—would Chie have been more receptive? He came on a winter''s eve. He pounded on the door while a cold rain beat on the shuttered veranda, so at first Chie thought him only the wind. The maid knew better. Chie heard her soft scuttling footsteps, the creak of the door. Then the maid brought a calling card to the drawing room, for Chie. Chie was reluctant to go to her guest; perhaps she was feeling too cozy. She and Naomi were reading at a low table set atop a charcoal brazier. A thick quilt spread over the sides of the table so their legs were tucked inside with the heat. "Who is it at this hour, in this weather?" Chie questioned as she picked the name card off the maid''s lacquer tray. "Shinoda, Akira. Kobe Dental College," she read. Naomi recognized the name. Chie heard a soft intake of air. "I think you should go," said Naomi. Akira was waiting in the entry. He was in his early twenties, slim and serious, wearing the black military-style uniform of a student. As he bowed—his hands hanging straight down, a black cap in one, a yellow oil-paper umbrella in the other—Chie glanced beyond him. In the glistening surface of the courtyard''s rain-drenched paving stones, she saw his reflection like a dark double. "Madame," said Akira, "forgive my disruption, but I come with a matter of urgency." His voice was soft, refined. He straightened and stole a deferential peek at her face. In the dim light his eyes shone with sincerity. Chie felt herself starting to like him. "Come inside, get out of this nasty night. Surely your business can wait for a moment or two." "I don''t want to trouble you. Normally I would approach you more properly but I''ve received word of a position. I''ve an opportunity to go to America, as dentist for Seattle''s Japanese community." "Congratulations," Chie said with amusement. "That is an opportunity, I''m sure. But how am I involved?" Even noting Naomi''s breathless reaction to the name card, Chie had no idea. Akira''s message, delivered like a formal speech, filled her with maternal amusement. You know how children speak so earnestly, so hurriedly, so endearingly about things that have no importance in an adult''s mind? That''s how she viewed him, as a child. It was how she viewed Naomi. Even though Naomi was eighteen and training endlessly in the arts needed to make a good marriage, Chie had made no effort to find her a husband. Akira blushed. "Depending on your response, I may stay in Japan. I''ve come to ask for Naomi''s hand." Suddenly Chie felt the dampness of the night. "Does Naomi know anything of your... ambitions?" "We have an understanding. Please don''t judge my candidacy by the unseemliness of this proposal. I ask directly because the use of a go-between takes much time. Either method comes down to the same thing: a matter of parental approval. If you give your consent, I become Naomi''s yoshi. We''ll live in the House of Fuji. Without your consent, I must go to America, to secure a new home for my bride." Eager to make his point, he''d been looking her full in the face. Abruptly, his voice turned gentle. "I see I''ve startled you. My humble apologies. I''ll take no more of your evening. My address is on my card. If you don''t wish to contact me, I''ll reapproach you in two weeks'' time. Until then, good night." He bowed and left. Taking her ease, with effortless grace, like a cat making off with a fish. "Mother?" Chie heard Naomi''s low voice and turned from the door. "He has asked you?" The sight of Naomi''s clear eyes, her dark brows gave Chie strength. Maybe his hopes were preposterous. "Where did you meet such a fellow? Imagine! He thinks he can marry the Fuji heir and take her to America all in the snap of his fingers!" Chie waited for Naomi''s ripe laughter. Naomi was silent. She stood a full half minute looking straight into Chie''s eyes. Finally, she spoke. "I met him at my literary meeting." Naomi turned to go back into the house, then stopped. "Mother." "Yes?" "I mean to have him."',
    'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
    'High'
  ),
  (
    'sat',
    'english',
    'writing',
    35,
    'The passage below is accompanied by a number of questions. For some questions, you will consider how the passage might be revised to improve the expression of ideas. For other questions, you will consider how the passage might be edited to correct errors in sentence structure, usage, or punctuation. A passage or a question may be accompanied by one or more graphics (such as a table or graph) that you will consider as you make revising and editing decisions.',
    'Greek yogurt—a strained form of cultured yogurt—has grown enormously in popularity in the United States since it was first introduced in the country in the late 1980s. From 2011 to 2012 alone, sales of Greek yogurt in the US increased by 50 percent. The resulting increase in Greek yogurt production has forced those involved in the business to address the detrimental effects that the yogurt-making process may be having on the environment. Fortunately, farmers and others in the Greek yogurt business have found many methods of controlling and eliminating most environmental threats. Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt (1.) outdo the potential drawbacks of its production. [1] The main environmental problem caused by the production of Greek yogurt is the creation of acid whey as a by-product. [2] Because it requires up to four times more milk to make than conventional yogurt does, Greek yogurt produces larger amounts of acid whey, which is difficult to dispose of. [3] To address the problem of disposal, farmers have found a number of uses for acid whey. [4] They can add it to livestock feed as a protein (2.) supplement, and people can make their own Greek-style yogurt at home by straining regular yogurt. [5] If it is improperly introduced into the environment, acid-whey runoff (3.) can pollute waterways, depleting the oxygen content of streams and rivers as it decomposes. [6] Yogurt manufacturers, food (4.) scientists; and government officials are also working together to develop additional solutions for reusing whey.(5.) (6.)Though these conservation methods can be costly and time-consuming, they are well worth the effort. Nutritionists consider Greek yogurt to be a healthy food: it is an excellent source of calcium and protein, serves (7.) to be a digestive aid, and (8.) it contains few calories in its unsweetened low- and non-fat forms. Greek yogurt is slightly lower in sugar and carbohydrates than conventional yogurt is. (9.) Also, because it is more concentrated, Greek yogurt contains slightly more protein per serving, thereby helping people stay (10.) satiated for longer periods of time. These health benefits have prompted Greek yogurt''s recent surge in popularity. In fact, Greek yogurt can be found in an increasing number of products such as snack food and frozen desserts. Because consumers reap the nutritional benefits of Greek yogurt and support those who make and sell it, therefore farmers and businesses should continue finding safe and effective methods of producing the food.',
    NULL,
    'Low');

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  type TEXT DEFAULT 'radiogroup',
  title VARCHAR(500) NOT NULL,
  correct_answer VARCHAR(200) NOT NULL,
  explanation VARCHAR(2000),
  exam_id INT REFERENCES exams(id)
);

INSERT INTO
  questions (title, correct_answer, explanation, subject, exam_id)
VALUES
  (
    'Which choice best describes what happens in the passage?',
    'One character receives a surprising request from another character.',
    'In the passage, a young man (Akira) asks a mother (Chie) for permission to marry her daughter (Naomi). The request was certainly surprising to the mother, as can be seen from line 47, which states that prior to Akira''s question Chie "had no idea" the request was coming. Choice A is incorrect because the passage depicts two characters engaged in a civil conversation, with Chie being impressed with Akira''s "sincerity" and finding herself "starting to like him." Choice C is incorrect because the passage is focused on the idea of Akira''s and Naomi''s present lives and possible futures. Choice D is incorrect because the interactions between Chie and Akira are polite, not critical; for example, Chie views Akira with "amusement," not animosity.',
    'english',
    2
  ),
  (
    'Which choice best describes the developmental pattern of the passage?',
    'A detailed depiction of a meaningful encounter',
    'The passage centers on a night when a young man tries to ge tapproval to marry a woman''s daughter. The passage includes detailed descriptions of setting (a "winter''s eve" and a "cold rain," lines 5-6); character (Akira''s "soft, refined" voice, line 33; Akira''s eyes "shining with sincerity," line 35); and plot ("Naomi was silent. She stood a full half minute looking straight into Chie''s eyes. Finally, she spoke,", lines 88-89). Choice A is incorrect because the passage focuses on a nontraditional marriage proposal. Choice C is incorrect because the passage concludes without resolution to the question of whether Akira and Naomi will receive permission to marry. Choice D is incorrect becuase the passage repeatedly makes clear that for Chie, her encounter with Akira is momentous and unsettling, as when Akira acknowledges in line 73 that he has "startled" her.',
    'english',
    2
  ),
  (
    'As used in line 1 and line 65, "directly" most nearly means',
    'without mediation.',
    'Akira "came directly, breaking all tradition," (line 1) when he approached Chie and asked to marry her daughter, and he "asked directly,", without "a go-between" (line 65) or "mediation," because doing otherwise would have taken too much time. Choices A, B, and D are incorrect because in these contexts, "directly" does not mean in a frank, confident, or precise manner.',
    'english',
    2
  ),
  (
    'Which reaction does Akira most fear from Chie?',
    'She will consider his proposal inappropriate.',
    'Choice A is the best answer. Akira is very concerned Chie will find his marriage proposal inappropriate because he did not follow traditional protocol and use a "go-between" (line 65). This is clear in lines 63-64, when Akira says to Chie "Please don''t judge my candidacy by the unseemliness of this proposal." Choice B is incorrect because there is no evidence in the passage that Akira worries that Chie will mistake his earnestness for immaturity. Choice C is incorrect because while Akira recognizes that his unscheduled visit is a nuisance, his larger concern is that Chie will reject him due to the inappropriateness of his proposal. Choice D is incorrect because there is no evidence in the passage that Akira worries Chie will underestimate the sincerity of his emotions.',
    'english',
    2
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    'Lines 63-64 ("Please... proposal")',
    'In lines 63-63, Akira says to Chie, "Please don''t judge my candidacy by the unseemliness of this proposal." This reveals Akira''s concern that Chie may say no to the proposal simply because  Akira did not follow traditional practices. Choices A, B, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because line 33 merely describes Akirs''s voice as "soft, refined." Choice B is incorrect because lines 49-51 reflect Chie''s perspective, not Akira''s. Choice D is incorrect because lines 71-72 indicate only that Akira was speaking in an eager and forthright matter.',
    'english',
    2
  ),
  (
    'In the passage, Akira addresses Chie with',
    'respect but not utter deference.',
    'Akira clearly treats Chie with respect, including "bowing" (line 26) to her, calling her "Madame" (line 31), and looking at her with "a deferential peek" (line 34). Akira does not offer Chie utter deference, though, as he asks to marry Naomi after he concedes that he is not following protocol and admits to being a "disruption" (line 31)',
    'english',
    2
  ),
  (
    'The main purpose of the first paragraph is to',
    'analyze a reaction.',
    'The first paragraph (lines 1-4) reflects on how Akira approached Chie to ask for her daughter''s hand in marriage. In these lines, tha narrator is wondering whether Chie would have been more likely to say yes to Akira''s proposal if Akira had followed tradition: "Akira came directly, breaking all tradition. Was that it? Had he followed form - had he asked his mother to speak to his father to approach a go-between - would Chie have been more receptive?" Thus, the main purpose of the first paragraph is to examine why Chie reacted a certain way to Akira''s proposal. Choice A is incorrect because the first paragraph describes only one aspect of Japanese culture (marriage proposals) but not the culture as a whole. Choice B is incorrect because the first paragraph implies a criticism of Akira''s individual marriage proposal but not the entire tradition of Japanese marriage proposals. Choice C is incorrect because the narrator does not question a suggestion.',
    'english',
    2
  ),
  (
    'As used in line 2, "form" most nearly means',
    'custom.',
    'In line 1, the narrator suggests that Akira''s direct approach broke "all tradition." The narrator then wonders if Akira had "followed form," or the tradition expected of him, would Chie have been more receptive to his proposal. In this context, following "form" thus means following a certain tradition or custom. Choices A, C, and D are incorrect because in this context "form" does not mean the way something looks (appearance), the way it is built (structure), or its essence (nature).',
    'english',
    2
  ),
  (
    'Why does Akira say his meeting with Chie is "a matter of urgency" (line 32)?',
    'He has been offered an attractive job in another country.',
    'Akira states that his unexpected meeting with Chie occured only because of a "matter of urgency," which he explains as "an opportunity to go to America, as dentist for Seattle''s Japanese community" (lines 41-42). Akira decides to directly speak to Chie because Chie''s response to his marriage proposal affects whether Akira accepts the job offer. Choice A is incorrect because there is no evidence in the passage that Akira is worried his parents will not approve of Naomi. Choice B is incorrect because Akira has "an understanding" with Naomi (line 63). Choice D is incorrect; while Akira may know that Chie is unaware of his feelings for Naomi, this is not what he is referring to when he mentions "a matter of urgency."',
    'english',
    2
  ),
  (
    'Which choice provides the best evidence for the answer to the previous question?',
    'Lines 39-42 ("Normally... community")',
    'In lines 39-42, Akira clarifies that the "matter of urgency" is that he has "an opportunity to go to America, as dentist for Seattle''s Japanese community." Akira needs Chie''s answer to his marriage proposal so he can decide whether to accept the job in Seattle. Choices A, C, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because in line 39 Akira apologizes for interrupting Chie''s quiet evening. Choice C is incorrect because lines 58-59 address the seriousness of Akira''s request, not its urgenty. Choice D is incorrect because line 73 shows only that Akira''s proposal has "startled" Chie and does not explain why his request is time-sensitive',
    'english',
    2
  );

INSERT INTO questions (title, correct_answer, explanation, subject, exam_id)
VALUES
  ('If (x - 1) / 3 = k and k = 3, what is the value of x?', '10', 'Since k = 3, one can substitute 3 for k in the equation (x - 1) / 3 = k, which gives (x - 1) / 3 = 3. Multiplying both sides of (x - 1) / 3 by 3 gives x - 1 = 9 and then adding 1 to both sides of x - 1 = 9 gives x = 10. Choices A, B, and C are incorrect because the result of subtracting 1 from the value and dividing by 3 is not the given value of k, which is 3.', 'math', 1),
  ('For i = √-1, what is the sum (7 + 3i) + (-8 + 9i)?', '-1 + 12i', 'To calculate 7 + 3i + (-8 + 9i), add the real parts of each complex number, 7 + (-8) = -1, and then add the imaginary parts, 3i + 9i = 12i. The result is -1 + 12i. Choices B, C, and D are incorrect and likely result from common errors that arise when adding complex numbers. For example, choice B is the result of adding 3i and -9i, and choice C is the result of adding 7 and 8.', 'math', 1),
  ('On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent p text messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?', '5m + 4p', 'The total number of text messages sent by Armand can be found by multiplying his rate of texting, in number of text messages sent per hour, by the total number of hours he spent sending them; that is m texts/hour * 5 hours = 5m texts. Similarly, the total number of text messages sent by Tyrone is his hourly rate of texting multiplied by the 4 hours he spent texting: p texts/hour x 4 hours = 4p texts. The total number of text messages sent by Armand and Tyrone is the sum of the total number of messages sent by Armand and the total number of messages sent by Tyrone: 5m + 4p. Choice A is incorrect and arises from adding the coefficients and multiplying the variables of 5m and 4p. Choice B is incorrect and is the result of multiplying 5m and 4p. The total number of messages sent by Armand and Tyrone should be the sum of 5m and 4p, not the product of these terms. Choice D is incorrect because it multiplies Armand''s number of hours spent texting by Tyrone''s hourly rate of texting, and vice versa. This mix-up results in an expression that does not equal the total number of messages sent by Armand and Tyrone.', 'math', 1),
  ('Kathy is a repair technician for a phone company. Each week, she receives a batch of phones that need repairs. The number of phones that she has left to fix at the end of each day can be estimated with the equation P = 108 - 23d, where P is the number of phones left and d is the number of days she has worked that week. What is the meaning of the value 108 in this equation?', 'Kathy starts each week with 108 phones to fix.', 'The value 108 in the equation is the value of P in P = 108 - 23d when d = 0. When d = 0, Kathy has worked 0 days that week. In other words, 108 is the number of phones left before Kathy has started work for the week. Therefore, the meaning of the value 108 in the equation is that Kathy starts each week with 108 phones to fix. Choice A is incorrect because Kathy will complete the repairs when P = 0. Since P = 108 - 23d, thiw will occur when 0 = 108 - 23d or when d = 108 / 23, not when d = 108. Therefore, the value 108 in the equation does not represent the number of days it will take Kathy to complete the repairs. Choices C and D are incorrect because the number 23 in P = 108 - 23d indicates that the number of phones left will decrease by 23 for each increase in the value of d by 1; in other words, Kathy is repairing phones at a rate of 23 per day, not 108 per hour (choice C), or 108 per day (choice D).', 'math', 1),
  ('If a / b = 2, what is the value of 4b / a?', '2', 'Since a / b = 2, it follows that b / a = 1 / 2. Multiplying both sides of the equation by 4 gives 4(b / a) = 4 (1 / 2), or 4b / a = 2. Choice A is incorrect because if 4b / a = 0, then a / b would be undefined. Choice B is incorrect because if 4b / a = 1, then a / b = 4. Choice D is incorrect because if 4b / a = 4, then a / b = 1.', 'math', 1),
  ('A line in the xy-plane passes through the origin and has a slope of 1 / 7. Which of the following points lies on the line?', '(14, 2)', 'In the xy-plane, all lines that pass through the origin are of the form y = mx, where m is the slope of the line. Therefore, the equation of this line is y = (1 / 7)x or x = 7y. A point with coordinates (a, b) will lie on the line if and only if a = 7b. Of the given choices, only choice D, (14, 2), satisfies this condition: 14 = 7(2). Choice A is incorrect because the line determined by the origin (0, 0) and (0, 7) is the vertical line with equation x = 0; that is, the y-axis. The slope of the y-axis is undefined, not 1 / 7. Therefore, the point (0, 7) does not lie on the line that passes the origin and has slope 1/7. Choices B and C are incorrect because neither of the ordered pairs has a y-coordinate that is 1/7 the value of the corresponding x-coordinate.', 'math', 1),
  ('If a = 5√2 and 2a = √(2x), what is the value of x?', '100', 'Since a = 5√2, one can substitute 5√2 for a in 2a = √(2x), giving 10√2 = √(2x). Squaring each side of 10√2 = √(2x) gives 200 = 2x. This gives x = 100.', 'math', 1),
  ('If y = kx, where k is a constant, and y = 24 when x = 6, what is the value of y when x = 5?', '20', 'Substituting 6 for y in y = kx gives 24 = (k)(6), which gives k = 4. Hence, y = 4x. Therefore, when x = 5, the value of y is (4)(5) = 20. None of the other choices for y is correct because y is a function of x, and so there is only one y-value for a given x-value. Choices A, B, and D are incorrect. Choice A is the result of substituting 6 for y and substituting 5 for x in the equation y = kx, when solving for k. Choice B results from substituting 3 for k and 5 for x in the equation y = kx, when solving for y. Choice D results from using y = k + x instead of y = kx.', 'math', 1),
  ('If 16 + 4x is 10 more than 14, what is the value of 8x?', '16', 'The description "16 + 4x is 10 more than 14" can be written as the equation 16 + 4x = 10 + 14, which is equivalent to 16 + 4x = 24. Subtracting 16 from each side gives 4x = 8. Since 8x is 2 times 4x, multiplying both sides of 4x = 8 by 2 gives 8x = 16. Therefore, the value of 8x is 16. Choice A is incorrect because it is the value of x, not 8x. Choices B and D are incorrect and may be the result of errors made when solving the equation 16 + 4x = 10 + 14 for x. For example, choice D could be the result of subtracting 16 from the left side of the equation and adding 16 to the right side of the equation 16 + 4x = 10 + 14, giving 4x = 40 and 8x = 80.', 'math', 1),
  ('A hospital stores one type of medicine in 2-decagram containers. Based on the information given in the box above, how many 1-milligram doses are there in one 2-decagram container? (1 decagram = 10 grams)', '20,000', 'Since there are 10 grams in 1 decagram, there are 2 x 10 = 20 grams in 2 decagrams. Since there are 1,000 milligrams in 1 gram, there are 20 x 1,000 = 20,000 milligrams in 20 grams. Therefore, 20,000 1-milligram doses of the medicine can be stored in a 2-decagram container. Choice A is incorrect; 0.002 is the number of grams in 2 milligrams. Choice B is incorrect; it could result from multiplying by 1m000 and dividing by 10 instead of multiplying by both 1,000 and 10 when converting from decagrams to milligrams. Choice C is incorrect; 2,000 is the number of milligrams in 2 grams, not the number of milligrams in 2 decagrams.', 'math', 1);

INSERT INTO questions (title, correct_answer, explanation, subject, exam_id)
VALUES
(
  'Which is the correct option?',
  'outweigh',
  '"Outweigh" is the only choice that appropriately reflects th erelationship the sentence sets up between "advantages" and "drawbacks". Choices A, B, and C are incorrect because each implies a competitive relationship that is inappropriate in this context.',
  'english',
  3
),
(
  'Which choice provides the most relevant detail?',
  'supplement and convert it into gas to use as fuel in electricity production.',
  'Choice B offers a second action that farmers can undertake to address the problem of acid whey disposal, thus suporting the claim made in the previous sentence ("To address the problem of disposal, farmers have found a number of uses for acid whey"). Choices A, C, and D are incorrect because they do not offer examples of how farmers could make use of acid whey.',
  'english',
  3
),
(
  'Which is the correct option?',
  'NO CHANGE',
  'Choice A results in a sentence that is gramatically correct and coherent. In choice A, "waterways," the correct plural form of "waterway," conveys the idea that acid whey could impact multiple bodies of water. Additionally, the compound verb "can pollute" suggests that acid whey represents an ongoing, potential problem. Choices B and D are incorrect because both use the possessive form of "waterway." Choice C is incorrect because it creates an unnecessary shift in verb tense. The present tense verb "can pollute" should be used instead, as it is consistent with the other verbs in the paragraph.',
  'english',
  3
),
(
  'Thich is the correct option?',
  'scientists, and',
  'Choice C utilizes proper punctuation for items listed in a series. In this case those items are nouns: "Yogurt manufacturers, food scientists, and government officials." Choices A and B are incorrect because both fail to recognize that the items are a part of a series. Since a comma is used after "manufacturers," a semicolon or colon should not be used after "scientists." Choice D is incorrect because the comma after "and" is unnecessary and deviates from grammatical conventions for presenting items in a series.',
  'english',
  3
),
(
  'To make this paragraph most logical, sentence 5 should be placed',
  'after sentence 2.',
  'Sentence 5 logically links sentence 2, which explains why Greek yogurt production yields large amoounts of acid whey, and sentence 3, which mentions the need to dispose of acid whey properly. Choices A, B, and D are incorrect because each would result in an illogical progression of sentences for this paragraph. If sentence 5 were left where it is or placed after sentence 3, it would appear illogically after the discussion of "the problem of disposal." If sentence 5 were placed after sentence 1, it would illogically discuss "acid-whey runoff" before the mention of acid whey begin "difficult to dispose of."',
  'english',
  3
),
(
  'The writer is considering deleting the underlined sentence. Should the writer do this?',
  'No, because it sets up the argument in the paragraph for the benefits of Greek yogurt.',
  'The paragraph includes several benefits of consuming Greek yogurt, particularly in regard to nutrition and satisfying hunger, to support the sentence''s claim that the conservation efforts are "well worth the effort." This transition echoes the passage''s earlier claim that "the advantages of Greek yogurt outweigh the potential drawbacks of its production." Choices A, B, and C are incorrect because they inaccurately describe the sentence in question.',
  'english',
  3
),
(
  'Which is the correct option?',
  'as',
  'Choice B provides a grammatically standard preposition that connects the verb "serves" and noun "digestive aid" and accurately depicts their relationship. Choice A is incorrect because the infinitive form "to be" yields a gramatically incorrect verb construction: "serves to be." Choice C and D are incorrect because both present options that deviate from standard English usage.',
  'english',
  3
),
(
  'Which is the correct option?',
  'contains',
  'Choice C presents a verb tense that is consistent in the context of the sentence. The choice is also free of the redundant "it." Choice A is incorrect because the subject "it" creates a redundacy. Choices B and D are incorrect because they present verb tenses that are inconsistent in the context of the sentence.',
  'english',
  3
),
(
  'Which is the correct option?',
  'NO CHANGE',
  'Choice A properly introduces an additional health benefit in a series of sentences that list health benefits. "Also" is the logical and coherent choice to communicate an addition. Choices B, C, and D are incorrect because none of the transitions they offer logically fits the content that precedes or follows the proposed choice.',
  'english',
  3
),
(
  'Which is the correct option?',
  'NO CHANGE',
  '"satiated" is the only choice that communicates effectively that Greek yogurt will satisfy hunger for a longer period of time. Choices B, C, and D are incorrect because each is improper usage in this context. A person can be "fulfilled" spiritually or in other ways, but a person who has eaten until he or she is no longer hungry cannot be described as fulfilled. Neither can he or she be described as being "complacent" or "sufficient."',
  'english',
  3
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
  ('Lines 49-61 ("You... mind")', 5),
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

INSERT INTO answers (content, question_id)
VALUES
  ('2', 11),
  ('4', 11),
  ('9', 11),
  ('10', 11),
  ('-1 + 12i', 12),
  ('-1 - 6i', 12),
  ('15 + 12i', 12),
  ('15 - 6i', 12),
  ('9mp', 13),
  ('20mp', 13),
  ('5m + 4p', 13),
  ('4m + 5p', 13),
  ('Kathy will complete the repairs within 108 days.', 14),
  ('Kathy starts each week with 108 phones to fix.', 14),
  ('Kathy repairs phones at a rate of 108 per hour.', 14),
  ('Kathy repairs phones at a rate of 108 per day.', 14),
  ('0', 15),
  ('1', 15),
  ('2', 15),
  ('4', 15),
  ('(0, 7)', 16),
  ('(1, 7)', 16),
  ('(7, 7)', 16),
  ('(14, 2)', 16),
  ('100', 17),
  ('50', 17),
  ('49', 17),
  ('16', 17),
  ('6', 18),
  ('15', 18),
  ('20', 18),
  ('23', 18),
  ('2', 19),
  ('6', 19),
  ('16', 19),
  ('80', 19),
  ('0.002', 20),
  ('200', 20),
  ('2,000', 20),
  ('20,000', 20);

INSERT INTO answers (content, question_id)
VALUES
('NO CHANGE', 21),
('defeat', 21),
('outperform', 21),
('outweigh', 21),
('NO CHANGE', 22),
('supplement and convert it into gas to use as fuel in electricity production.', 22),
('supplement, while sweet whey is more desirable as a food additive for humans.', 22),
('supplement, which provides an important element of their diet', 22),
('NO CHANGE', 23),
('can pollute waterway''s,', 23),
('could have polluted waterways,', 23),
('has polluted waterway''s,', 23),
('NO CHANGE', 24),
('scientists: and', 24),
('scientists, and', 24),
('scientists, and,', 24),
('where it is now.', 25),
('after sentence 1.', 25),
('after sentence 2.', 25),
('after sentence 3.', 25),
('Yes, because it does not provide a transition from the previous paragraph.', 26),
('Yes, because it fails to support the main argument of the passage as introduced in the first paragraph.', 26),
('No, because it continues the explanation of how acid whey can be disposed of safely.', 26),
('No, because it sets up the argument in the paragraph for the benefits of Greek yogurt.', 26),
('NO CHANGE', 27),
('as', 27),
('like', 27),
('for', 27),
('NO CHANGE', 28),
('conatining', 28),
('contains', 28),
('will contain', 28),
('NO CHANGE', 29),
('In other words,', 29),
('Therefore,', 29),
('For instance,', 29),
('NO CHANGE', 30),
('fulfilled', 30),
('complacent', 30),
('sufficient', 30);


ALTER TABLE
  questions DROP CONSTRAINT questions_exam_id_fkey,
ADD
  CONSTRAINT questions_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES exams(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
  user_exams DROP CONSTRAINT user_exams_exam_id_fkey,
ADD
  CONSTRAINT user_exams_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES exams(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
  user_courses DROP CONSTRAINT user_courses_course_id_fkey,
ADD
  CONSTRAINT user_courses_course_id_fkey FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
  topics DROP CONSTRAINT topics_course_id_fkey,
ADD
  CONSTRAINT topics_course_id_fkey FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE ON DELETE CASCADE;


ALTER TABLE
  answers DROP CONSTRAINT answers_question_id_fkey,
ADD
  CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id) ON UPDATE CASCADE ON DELETE CASCADE;

CREATE TABLE notebooks
(
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE kolbs
(
  id SERIAL PRIMARY KEY,
  question VARCHAR(100) NOT NULL,
  correct_answer VARCHAR(200) NOT NULL,
  user_answer VARCHAR(200),
  what VARCHAR(1000) NOT NULL,
  why VARCHAR(1000) NOT NULL,
  how VARCHAR(1000) NOT NULL,
  notebook_id INT NOT NULL REFERENCES notebooks(id)
);