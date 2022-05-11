'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exams', [
      {
        type: 'sat',
        title: 'SAT Final Exam',
        subject: 'math',
        section: 'nocalc',
        duration: 25,
        instructions: 'Solve each problem and choose the best answer from the choices provided',
        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
        difficulty: 'medium',
        questions_count: 10,
        timed: true,
        start_time: '2022-05-09 11:32:25.707+03',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        type: 'sat',
        title: 'SAT Reading test',
        subject: 'english',
        section: 'reading',
        duration: 65,
        instructions: 'The passage below is followed by a number of questions. After reading the passage, choose the best answer to each question based on what is stated or implied in the passage and in any accompanying graphics (such as a table or graph).',
        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
        text: 'Akira came directly, breaking all tradition. Was that it? Had he followed form—had he asked his mother to speak to his father to approach a go-between—would Chie have been more receptive? He came on a winter\'s eve. He pounded on the door while a cold rain beat on the shuttered veranda, so at first Chie thought him only the wind. The maid knew better. Chie heard her soft scuttling footsteps, the creak of the door. Then the maid brought a calling card to the drawing room, for Chie. Chie was reluctant to go to her guest; perhaps she was feeling too cozy. She and Naomi were reading at a low table set atop a charcoal brazier. A thick quilt spread over the sides of the table so their legs were tucked inside with the heat. "Who is it at this hour, in this weather?" Chie questioned as she picked the name card off the maid\'s lacquer tray. "Shinoda, Akira. Kobe Dental College," she read. Naomi recognized the name. Chie heard a soft intake of air. "I think you should go," said Naomi. Akira was waiting in the entry. He was in his early twenties, slim and serious, wearing the black military-style uniform of a student. As he bowed—his hands hanging straight down, a black cap in one, a yellow oil-paper umbrella in the other—Chie glanced beyond him. In the glistening surface of the courtyard\'s rain-drenched paving stones, she saw his reflection like a dark double. "Madame," said Akira, "forgive my disruption, but I come with a matter of urgency." His voice was soft, refined. He straightened and stole a deferential peek at her face. In the dim light his eyes shone with sincerity. Chie felt herself starting to like him. "Come inside, get out of this nasty night. Surely your business can wait for a moment or two." "I don\'t want to trouble you. Normally I would approach you more properly but \'ve received word of a position. I\'ve an opportunity to go to America, as dentist for Seattle\'s Japanese community." "Congratulations," Chie said with amusement. "That is an opportunity, I\'m sure. But how am I involved?" Even noting Naomi\'s breathless reaction to the name card, Chie had no idea. Akira\'s message, delivered like a formal speech, filled her with maternal amusement. You know how children speak so earnestly, so hurriedly, so endearingly about things that have no importance in an adult\'s mind? That\'s how she viewed him, as a child. It was how she viewed Naomi. Even though Naomi was eighteen and training endlessly in the arts needed to make a good marriage, Chie had made no effort to find her a husband. Akira blushed. "Depending on your response, I may stay in Japan. I\'ve come to ask for Naomi\'s hand." Suddenly Chie felt the dampness of the night. "Does Naomi know anything of your... ambitions?" "We have an understanding. Please don\'t judge my candidacy by the unseemliness of this proposal. I ask directly because the use of a go-between takes much time. Either method comes down to the same thing: a matter of parental approval. If you give your consent, I become Naomi\'s yoshi. We\'ll live in the House of Fuji. Without your consent, I must go to America, to secure a new home for my bride." Eager to make his point, he\'d been looking her full in the face. Abruptly, his voice turned gentle. "I see I\'ve startled you. My humble apologies. I\'ll take no more of your evening. My address is on my card. If you don\'t wish to contact me, I\'ll reapproach you in two weeks\' time. Until then, good night." He bowed and left. Taking her ease, with effortless grace, like a cat making off with a fish. "Mother?" Chie heard Naomi\'s low voice and turned from the door. "He has asked you?" The sight of Naomi\'s clear eyes, her dark brows gave Chie strength. Maybe his hopes were preposterous. "Where did you meet such a fellow? Imagine! He thinks he can marry the Fuji heir and take her to America all in the snap of his fingers!" Chie waited for Naomi\'s ripe laughter. Naomi was silent. She stood a full half minute looking straight into Chie\'s eyes. Finally, she spoke. "I met him at my literary meeting." Naomi turned to go back into the house, then stopped. "Mother." "Yes?" "I mean to have him."',
        difficulty: 'high',
        questions_count: 10,
        timed: false,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        type: 'sat',
        title: 'SAT Writing test',
        subject: 'english',
        section: 'writing',
        duration: 35,
        instructions: 'The passage below is accompanied by a number of questions. For some questions, you will consider how the passage might be revised to improve the expression of ideas. For other questions, you will consider how the passage might be edited to correct errors in sentence structure, usage, or punctuation. A passage or a question may be accompanied by one or more graphics (such as a table or graph) that you will consider as you make revising and editing decisions.',
        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
        text: 'Greek yogurt—a strained form of cultured yogurt—has grown enormously in popularity in the United States since it was first introduced in the country in the late 1980s. From 2011 to 2012 alone, sales of Greek yogurt in the US increased by 50 percent. The resulting increase in Greek yogurt production has forced those involved in the business to address the detrimental effects that the yogurt-making process may be having on the environment. Fortunately, farmers and others in the Greek yogurt business have found many methods of controlling and eliminating most environmental threats. Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt (1.) outdo the potential drawbacks of its production. [1] The main environmental problem caused by the production of Greek yogurt is the creation of acid whey as a by-product. [2] Because it requires up to four times more milk to make than conventional yogurt does, Greek yogurt produces larger amounts of acid whey, which is difficult to dispose of. [3] To address the problem of disposal, farmers have found a number of uses for acid whey. [4] They can add it to livestock feed as a protein (2.) supplement, and people can make their own Greek-style yogurt at home by straining regular yogurt. [5] If it is improperly introduced into the environment, acid-whey runoff (3.) can pollute waterways, depleting the oxygen content of streams and rivers as it decomposes. [6] Yogurt manufacturers, food (4.) scientists; and government officials are also working together to develop additional solutions for reusing whey.(5.) (6.)Though these conservation methods can be costly and time-consuming, they are well worth the effort. Nutritionists consider Greek yogurt to be a healthy food: it is an excellent source of calcium and protein, serves (7.) to be a digestive aid, and (8.) it contains few calories in its unsweetened low- and non-fat forms. Greek yogurt is slightly lower in sugar and carbohydrates than conventional yogurt is. (9.) Also, because it is more concentrated, Greek yogurt contains slightly more protein per serving, thereby helping people stay (10.) satiated for longer periods of time. These health benefits have prompted Greek yogurt\'s recent surge in popularity. In fact, Greek yogurt can be found in an increasing number of products such as snack food and frozen desserts. Because consumers reap the nutritional benefits of Greek yogurt and support those who make and sell it, therefore farmers and businesses should continue finding safe and effective methods of producing the food.',
        difficulty: 'low',
        questions_count: 10,
        timed: false,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        type: 'sat',
        title: 'SAT Calculator Math test',
        subject: 'math',
        section: 'calc',
        duration: 55,
        instructions: 'Solve each problem and choose the best answer from the choices provided',
        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
        difficulty: 'medium',
        questions_count: 10,
        timed: false,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        type: 'usmle',
        title: 'USMLE Practice Exam',
        subject: 'medicine',
        duration: 90,
        instructions: 'Read the questions, analize the situations presented, and choose the most appropriate ansewr to each question.',
        difficulty: 'high',
        questions_count: 10,
        timed: false,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exams', null, {});
  }
};
