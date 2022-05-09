'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      {
        title: 'Which choice best describes what happens in the passage?',
        correct_answer: 'One character receives a surprising request from another character.',
        explanation: 'In the passage, a young man (Akira) asks a mother (Chie) for permission to marry her daughter (Naomi). The request was certainly surprising to the mother, as can be seen from line 47, which states that prior to Akira\'s question Chie "had no idea" the request was coming. Choice A is incorrect because the passage depicts two characters engaged in a civil conversation, with Chie being impressed with Akira\'s "sincerity" and finding herself "starting to like him." Choice C is incorrect because the passage is focused on the idea of Akira\'s and Naomi\'s present lives and possible futures. Choice D is incorrect because the interactions between Chie and Akira are polite, not critical; for example, Chie views Akira with "amusement," not animosity.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'Which choice best describes the developmental pattern of the passage?',
        correct_answer: 'A detailed depiction of a meaningful encounter',
        explanation: 'The passage centers on a night when a young man tries to ge tapproval to marry a woman\'s daughter. The passage includes detailed descriptions of setting (a "winter\'s eve" and a "cold rain," lines 5-6); character (Akira\'s "soft, refined" voice, line 33; Akira\'s eyes "shining with sincerity," line 35); and plot ("Naomi was silent. She stood a full half minute looking straight into Chie\'s eyes. Finally, she spoke,", lines 88-89). Choice A is incorrect because the passage focuses on a nontraditional marriage proposal. Choice C is incorrect because the passage concludes without resolution to the question of whether Akira and Naomi will receive permission to marry. Choice D is incorrect becuase the passage repeatedly makes clear that for Chie, her encounter with Akira is momentous and unsettling, as when Akira acknowledges in line 73 that he has "startled" her.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'As used in line 1 and line 65, "directly" most nearly means',
        correct_answer: 'without mediation.',
        explanation: 'Akira "came directly, breaking all tradition," (line 1) when he approached Chie and asked to marry her daughter, and he "asked directly,", without "a go-between" (line 65) or "mediation," because doing otherwise would have taken too much time. Choices A, B, and D are incorrect because in these contexts, "directly" does not mean in a frank, confident, or precise manner.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'Which reaction does Akira most fear from Chie?',
        correct_answer: 'She will consider his proposal inappropriate.',
        explanation: 'Choice A is the best answer. Akira is very concerned Chie will find his marriage proposal inappropriate because he did not follow traditional protocol and use a "go-between" (line 65). This is clear in lines 63-64, when Akira says to Chie "Please don\'t judge my candidacy by the unseemliness of this proposal." Choice B is incorrect because there is no evidence in the passage that Akira worries that Chie will mistake his earnestness for immaturity. Choice C is incorrect because while Akira recognizes that his unscheduled visit is a nuisance, his larger concern is that Chie will reject him due to the inappropriateness of his proposal. Choice D is incorrect because there is no evidence in the passage that Akira worries Chie will underestimate the sincerity of his emotions.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'Which choice provides the best evidence for the answer to the previous question?',
        correct_answer: 'Lines 63-64 ("Please... proposal")',
        explanation: 'In lines 63-63, Akira says to Chie, "Please don\'t judge my candidacy by the unseemliness of this proposal." This reveals Akira\'s concern that Chie may say no to the proposal simply because  Akira did not follow traditional practices. Choices A, B, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because line 33 merely describes Akirs\'s voice as "soft, refined." Choice B is incorrect because lines 49-51 reflect Chie\'s perspective, not Akira\'s. Choice D is incorrect because lines 71-72 indicate only that Akira was speaking in an eager and forthright matter.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'In the passage, Akira addresses Chie with',
        correct_answer: 'respect but not utter deference.',
        explanation: 'Akira clearly treats Chie with respect, including "bowing" (line 26) to her, calling her "Madame" (line 31), and looking at her with "a deferential peek" (line 34). Akira does not offer Chie utter deference, though, as he asks to marry Naomi after he concedes that he is not following protocol and admits to being a "disruption" (line 31)',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'The main purpose of the first paragraph is to',
        correct_answer: 'analyze a reaction.',
        explanation: 'The first paragraph (lines 1-4) reflects on how Akira approached Chie to ask for her daughter\'s hand in marriage. In these lines, tha narrator is wondering whether Chie would have been more likely to say yes to Akira\'s proposal if Akira had followed tradition: "Akira came directly, breaking all tradition. Was that it? Had he followed form - had he asked his mother to speak to his father to approach a go-between - would Chie have been more receptive?" Thus, the main purpose of the first paragraph is to examine why Chie reacted a certain way to Akira\'s proposal. Choice A is incorrect because the first paragraph describes only one aspect of Japanese culture (marriage proposals) but not the culture as a whole. Choice B is incorrect because the first paragraph implies a criticism of Akira\'s individual marriage proposal but not the entire tradition of Japanese marriage proposals. Choice C is incorrect because the narrator does not question a suggestion.',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'As used in line 2, "form" most nearly means',
        correct_answer: 'custom.',
        explanation: 'In line 1, the narrator suggests that Akira\'s direct approach broke "all tradition." The narrator then wonders if Akira had "followed form," or the tradition expected of him, would Chie have been more receptive to his proposal. In this context, following "form" thus means following a certain tradition or custom. Choices A, C, and D are incorrect because in this context "form" does not mean the way something looks (appearance), the way it is built (structure), or its essence (nature).',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'Why does Akira say his meeting with Chie is "a matter of urgency" (line 32)?',
        correct_answer: 'He has been offered an attractive job in another country.',
        explanation: 'Akira states that his unexpected meeting with Chie occured only because of a "matter of urgency," which he explains as "an opportunity to go to America, as dentist for Seattle\'s Japanese community" (lines 41-42). Akira decides to directly speak to Chie because Chie\'s response to his marriage proposal affects whether Akira accepts the job offer. Choice A is incorrect because there is no evidence in the passage that Akira is worried his parents will not approve of Naomi. Choice B is incorrect because Akira has "an understanding" with Naomi (line 63). Choice D is incorrect; while Akira may know that Chie is unaware of his feelings for Naomi, this is not what he is referring to when he mentions "a matter of urgency."',
        subject: 'english',
        exam_id: 2
      },
      {
        title: 'Which choice provides the best evidence for the answer to the previous question?',
        correct_answer: 'Lines 39-42 ("Normally... community")',
        explanation: 'In lines 39-42, Akira clarifies that the "matter of urgency" is that he has "an opportunity to go to America, as dentist for Seattle\'s Japanese community." Akira needs Chie\'s answer to his marriage proposal so he can decide whether to accept the job in Seattle. Choices A, C, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because in line 39 Akira apologizes for interrupting Chie\'s quiet evening. Choice C is incorrect because lines 58-59 address the seriousness of Akira\'s request, not its urgenty. Choice D is incorrect because line 73 shows only that Akira\'s proposal has "startled" Chie and does not explain why his request is time-sensitive',
        subject: 'english',
        exam_id: 2
      },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
