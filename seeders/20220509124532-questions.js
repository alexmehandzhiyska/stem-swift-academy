'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      {
        title: 'Which choice best describes what happens in the passage?',
        correct_answer: 'One character receives a surprising request from another character.',
        explanation: 'In the passage, a young man (Akira) asks a mother (Chie) for permission to marry her daughter (Naomi). The request was certainly surprising to the mother, as can be seen from line 47, which states that prior to Akira\'s question Chie "had no idea" the request was coming. Choice A is incorrect because the passage depicts two characters engaged in a civil conversation, with Chie being impressed with Akira\'s "sincerity" and finding herself "starting to like him." Choice C is incorrect because the passage is focused on the idea of Akira\'s and Naomi\'s present lives and possible futures. Choice D is incorrect because the interactions between Chie and Akira are polite, not critical; for example, Chie views Akira with "amusement," not animosity.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which choice best describes the developmental pattern of the passage?',
        correct_answer: 'A detailed depiction of a meaningful encounter',
        explanation: 'The passage centers on a night when a young man tries to ge tapproval to marry a woman\'s daughter. The passage includes detailed descriptions of setting (a "winter\'s eve" and a "cold rain," lines 5-6); character (Akira\'s "soft, refined" voice, line 33; Akira\'s eyes "shining with sincerity," line 35); and plot ("Naomi was silent. She stood a full half minute looking straight into Chie\'s eyes. Finally, she spoke,", lines 88-89). Choice A is incorrect because the passage focuses on a nontraditional marriage proposal. Choice C is incorrect because the passage concludes without resolution to the question of whether Akira and Naomi will receive permission to marry. Choice D is incorrect becuase the passage repeatedly makes clear that for Chie, her encounter with Akira is momentous and unsettling, as when Akira acknowledges in line 73 that he has "startled" her.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'As used in line 1 and line 65, "directly" most nearly means',
        correct_answer: 'without mediation.',
        explanation: 'Akira "came directly, breaking all tradition," (line 1) when he approached Chie and asked to marry her daughter, and he "asked directly,", without "a go-between" (line 65) or "mediation," because doing otherwise would have taken too much time. Choices A, B, and D are incorrect because in these contexts, "directly" does not mean in a frank, confident, or precise manner.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which reaction does Akira most fear from Chie?',
        correct_answer: 'She will consider his proposal inappropriate.',
        explanation: 'Choice A is the best answer. Akira is very concerned Chie will find his marriage proposal inappropriate because he did not follow traditional protocol and use a "go-between" (line 65). This is clear in lines 63-64, when Akira says to Chie "Please don\'t judge my candidacy by the unseemliness of this proposal." Choice B is incorrect because there is no evidence in the passage that Akira worries that Chie will mistake his earnestness for immaturity. Choice C is incorrect because while Akira recognizes that his unscheduled visit is a nuisance, his larger concern is that Chie will reject him due to the inappropriateness of his proposal. Choice D is incorrect because there is no evidence in the passage that Akira worries Chie will underestimate the sincerity of his emotions.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which choice provides the best evidence for the answer to the previous question?',
        correct_answer: 'Lines 63-64 ("Please... proposal")',
        explanation: 'In lines 63-63, Akira says to Chie, "Please don\'t judge my candidacy by the unseemliness of this proposal." This reveals Akira\'s concern that Chie may say no to the proposal simply because  Akira did not follow traditional practices. Choices A, B, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because line 33 merely describes Akirs\'s voice as "soft, refined." Choice B is incorrect because lines 49-51 reflect Chie\'s perspective, not Akira\'s. Choice D is incorrect because lines 71-72 indicate only that Akira was speaking in an eager and forthright matter.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'In the passage, Akira addresses Chie with',
        correct_answer: 'respect but not utter deference.',
        explanation: 'Akira clearly treats Chie with respect, including "bowing" (line 26) to her, calling her "Madame" (line 31), and looking at her with "a deferential peek" (line 34). Akira does not offer Chie utter deference, though, as he asks to marry Naomi after he concedes that he is not following protocol and admits to being a "disruption" (line 31)',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'The main purpose of the first paragraph is to',
        correct_answer: 'analyze a reaction.',
        explanation: 'The first paragraph (lines 1-4) reflects on how Akira approached Chie to ask for her daughter\'s hand in marriage. In these lines, tha narrator is wondering whether Chie would have been more likely to say yes to Akira\'s proposal if Akira had followed tradition: "Akira came directly, breaking all tradition. Was that it? Had he followed form - had he asked his mother to speak to his father to approach a go-between - would Chie have been more receptive?" Thus, the main purpose of the first paragraph is to examine why Chie reacted a certain way to Akira\'s proposal. Choice A is incorrect because the first paragraph describes only one aspect of Japanese culture (marriage proposals) but not the culture as a whole. Choice B is incorrect because the first paragraph implies a criticism of Akira\'s individual marriage proposal but not the entire tradition of Japanese marriage proposals. Choice C is incorrect because the narrator does not question a suggestion.',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'As used in line 2, "form" most nearly means',
        correct_answer: 'custom.',
        explanation: 'In line 1, the narrator suggests that Akira\'s direct approach broke "all tradition." The narrator then wonders if Akira had "followed form," or the tradition expected of him, would Chie have been more receptive to his proposal. In this context, following "form" thus means following a certain tradition or custom. Choices A, C, and D are incorrect because in this context "form" does not mean the way something looks (appearance), the way it is built (structure), or its essence (nature).',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Why does Akira say his meeting with Chie is "a matter of urgency" (line 32)?',
        correct_answer: 'He has been offered an attractive job in another country.',
        explanation: 'Akira states that his unexpected meeting with Chie occured only because of a "matter of urgency," which he explains as "an opportunity to go to America, as dentist for Seattle\'s Japanese community" (lines 41-42). Akira decides to directly speak to Chie because Chie\'s response to his marriage proposal affects whether Akira accepts the job offer. Choice A is incorrect because there is no evidence in the passage that Akira is worried his parents will not approve of Naomi. Choice B is incorrect because Akira has "an understanding" with Naomi (line 63). Choice D is incorrect; while Akira may know that Chie is unaware of his feelings for Naomi, this is not what he is referring to when he mentions "a matter of urgency."',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which choice provides the best evidence for the answer to the previous question?',
        correct_answer: 'Lines 39-42 ("Normally... community")',
        explanation: 'In lines 39-42, Akira clarifies that the "matter of urgency" is that he has "an opportunity to go to America, as dentist for Seattle\'s Japanese community." Akira needs Chie\'s answer to his marriage proposal so he can decide whether to accept the job in Seattle. Choices A, C, and D do not provide the best evidence for the answer to the previous question. Choice A is incorrect because in line 39 Akira apologizes for interrupting Chie\'s quiet evening. Choice C is incorrect because lines 58-59 address the seriousness of Akira\'s request, not its urgenty. Choice D is incorrect because line 73 shows only that Akira\'s proposal has "startled" Chie and does not explain why his request is time-sensitive',
        exam_type: 'sat',
        exam_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'If (x - 1) / 3 = k and k = 3, what is the value of x?',
        correct_answer: '10',
        explanation: 'Since k = 3, one can substitute 3 for k in the equation (x - 1) / 3 = k, which gives (x - 1) / 3 = 3. Multiplying both sides of (x - 1) / 3 by 3 gives x - 1 = 9 and then adding 1 to both sides of x - 1 = 9 gives x = 10. Choices A, B, and C are incorrect because the result of subtracting 1 from the value and dividing by 3 is not the given value of k, which is 3.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'For i = √-1, what is the sum (7 + 3i) + (-8 + 9i)?',
        correct_answer: '-1 + 12i',
        explanation: 'To calculate 7 + 3i + (-8 + 9i), add the real parts of each complex number, 7 + (-8) = -1, and then add the imaginary parts, 3i + 9i = 12i. The result is -1 + 12i. Choices B, C, and D are incorrect and likely result from common errors that arise when adding complex numbers. For example, choice B is the result of adding 3i and -9i, and choice C is the result of adding 7 and 8.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent p text messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?',
        correct_answer: '5m + 4p',
        explanation: 'The total number of text messages sent by Armand can be found by multiplying his rate of texting, in number of text messages sent per hour, by the total number of hours he spent sending them; that is m texts/hour * 5 hours = 5m texts. Similarly, the total number of text messages sent by Tyrone is his hourly rate of texting multiplied by the 4 hours he spent texting: p texts/hour x 4 hours = 4p texts. The total number of text messages sent by Armand and Tyrone is the sum of the total number of messages sent by Armand and the total number of messages sent by Tyrone: 5m + 4p. Choice A is incorrect and arises from adding the coefficients and multiplying the variables of 5m and 4p. Choice B is incorrect and is the result of multiplying 5m and 4p. The total number of messages sent by Armand and Tyrone should be the sum of 5m and 4p, not the product of these terms. Choice D is incorrect because it multiplies Armand\'s number of hours spent texting by Tyrone\'s hourly rate of texting, and vice versa. This mix-up results in an expression that does not equal the total number of messages sent by Armand and Tyrone.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Kathy is a repair technician for a phone company. Each week, she receives a batch of phones that need repairs. The number of phones that she has left to fix at the end of each day can be estimated with the equation P = 108 - 23d, where P is the number of phones left and d is the number of days she has worked that week. What is the meaning of the value 108 in this equation?',
        correct_answer: 'Kathy starts each week with 108 phones to fix.',
        explanation: 'The value 108 in the equation is the value of P in P = 108 - 23d when d = 0. When d = 0, Kathy has worked 0 days that week. In other words, 108 is the number of phones left before Kathy has started work for the week. Therefore, the meaning of the value 108 in the equation is that Kathy starts each week with 108 phones to fix. Choice A is incorrect because Kathy will complete the repairs when P = 0. Since P = 108 - 23d, thiw will occur when 0 = 108 - 23d or when d = 108 / 23, not when d = 108. Therefore, the value 108 in the equation does not represent the number of days it will take Kathy to complete the repairs. Choices C and D are incorrect because the number 23 in P = 108 - 23d indicates that the number of phones left will decrease by 23 for each increase in the value of d by 1; in other words, Kathy is repairing phones at a rate of 23 per day, not 108 per hour (choice C), or 108 per day (choice D).',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'If a / b = 2, what is the value of 4b / a?',
        correct_answer: '2',
        explanation: 'Since a / b = 2, it follows that b / a = 1 / 2. Multiplying both sides of the equation by 4 gives 4(b / a) = 4 (1 / 2), or 4b / a = 2. Choice A is incorrect because if 4b / a = 0, then a / b would be undefined. Choice B is incorrect because if 4b / a = 1, then a / b = 4. Choice D is incorrect because if 4b / a = 4, then a / b = 1.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'A line in the xy-plane passes through the origin and has a slope of 1 / 7. Which of the following points lies on the line?',
        correct_answer: '(14, 2)',
        explanation: 'In the xy-plane, all lines that pass through the origin are of the form y = mx, where m is the slope of the line. Therefore, the equation of this line is y = (1 / 7)x or x = 7y. A point with coordinates (a, b) will lie on the line if and only if a = 7b. Of the given choices, only choice D, (14, 2), satisfies this condition: 14 = 7(2). Choice A is incorrect because the line determined by the origin (0, 0) and (0, 7) is the vertical line with equation x = 0; that is, the y-axis. The slope of the y-axis is undefined, not 1 / 7. Therefore, the point (0, 7) does not lie on the line that passes the origin and has slope 1/7. Choices B and C are incorrect because neither of the ordered pairs has a y-coordinate that is 1/7 the value of the corresponding x-coordinate.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'If a = 5√2 and 2a = √(2x), what is the value of x?',
        correct_answer: '100',
        explanation: 'Since a = 5√2, one can substitute 5√2 for a in 2a = √(2x), giving 10√2 = √(2x). Squaring each side of 10√2 = √(2x) gives 200 = 2x. This gives x = 100.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'If y = kx, where k is a constant, and y = 24 when x = 6, what is the value of y when x = 5?',
        correct_answer: '20',
        explanation: 'Substituting 6 for y in y = kx gives 24 = (k)(6), which gives k = 4. Hence, y = 4x. Therefore, when x = 5, the value of y is (4)(5) = 20. None of the other choices for y is correct because y is a function of x, and so there is only one y-value for a given x-value. Choices A, B, and D are incorrect. Choice A is the result of substituting 6 for y and substituting 5 for x in the equation y = kx, when solving for k. Choice B results from substituting 3 for k and 5 for x in the equation y = kx, when solving for y. Choice D results from using y = k + x instead of y = kx.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'If 16 + 4x is 10 more than 14, what is the value of 8x?',
        correct_answer: '16',
        explanation: 'The description "16 + 4x is 10 more than 14" can be written as the equation 16 + 4x = 10 + 14, which is equivalent to 16 + 4x = 24. Subtracting 16 from each side gives 4x = 8. Since 8x is 2 times 4x, multiplying both sides of 4x = 8 by 2 gives 8x = 16. Therefore, the value of 8x is 16. Choice A is incorrect because it is the value of x, not 8x. Choices B and D are incorrect and may be the result of errors made when solving the equation 16 + 4x = 10 + 14 for x. For example, choice D could be the result of subtracting 16 from the left side of the equation and adding 16 to the right side of the equation 16 + 4x = 10 + 14, giving 4x = 40 and 8x = 80.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'A hospital stores one type of medicine in 2-decagram containers. Based on the information given in the box above, how many 1-milligram doses are there in one 2-decagram container? (1 decagram = 10 grams)',
        correct_answer: '20,000',
        explanation: 'Since there are 10 grams in 1 decagram, there are 2 x 10 = 20 grams in 2 decagrams. Since there are 1,000 milligrams in 1 gram, there are 20 x 1,000 = 20,000 milligrams in 20 grams. Therefore, 20,000 1-milligram doses of the medicine can be stored in a 2-decagram container. Choice A is incorrect; 0.002 is the number of grams in 2 milligrams. Choice B is incorrect; it could result from multiplying by 1m000 and dividing by 10 instead of multiplying by both 1,000 and 10 when converting from decagrams to milligrams. Choice C is incorrect; 2,000 is the number of milligrams in 2 grams, not the number of milligrams in 2 decagrams.',
        exam_type: 'sat',
        exam_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'outweigh',
        explanation: '"Outweigh" is the only choice that appropriately reflects th erelationship the sentence sets up between "advantages" and "drawbacks". Choices A, B, and C are incorrect because each implies a competitive relationship that is inappropriate in this context.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which choice provides the most relevant detail?',
        correct_answer: 'supplement and convert it into gas to use as fuel in electricity production.',
        explanation: 'Choice B offers a second action that farmers can undertake to address the problem of acid whey disposal, thus suporting the claim made in the previous sentence ("To address the problem of disposal, farmers have found a number of uses for acid whey"). Choices A, C, and D are incorrect because they do not offer examples of how farmers could make use of acid whey.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'NO CHANGE',
        explanation: 'Choice A results in a sentence that is gramatically correct and coherent. In choice A, "waterways," the correct plural form of "waterway," conveys the idea that acid whey could impact multiple bodies of water. Additionally, the compound verb "can pollute" suggests that acid whey represents an ongoing, potential problem. Choices B and D are incorrect because both use the possessive form of "waterway." Choice C is incorrect because it creates an unnecessary shift in verb tense. The present tense verb "can pollute" should be used instead, as it is consistent with the other verbs in the paragraph.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'scientists, and',
        explanation: 'Choice C utilizes proper punctuation for items listed in a series. In this case those items are nouns: "Yogurt manufacturers, food scientists, and government officials." Choices A and B are incorrect because both fail to recognize that the items are a part of a series. Since a comma is used after "manufacturers," a semicolon or colon should not be used after "scientists." Choice D is incorrect because the comma after "and" is unnecessary and deviates from grammatical conventions for presenting items in a series.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'To make this paragraph most logical, sentence 5 should be placed',
        correct_answer: 'after sentence 2.',
        explanation: 'Sentence 5 logically links sentence 2, which explains why Greek yogurt production yields large amoounts of acid whey, and sentence 3, which mentions the need to dispose of acid whey properly. Choices A, B, and D are incorrect because each would result in an illogical progression of sentences for this paragraph. If sentence 5 were left where it is or placed after sentence 3, it would appear illogically after the discussion of "the problem of disposal." If sentence 5 were placed after sentence 1, it would illogically discuss "acid-whey runoff" before the mention of acid whey begin "difficult to dispose of."',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'The writer is considering deleting the underlined sentence. Should the writer do this?',
        correct_answer: 'No, because it sets up the argument in the paragraph for the benefits of Greek yogurt.',
        explanation: 'The paragraph includes several benefits of consuming Greek yogurt, particularly in regard to nutrition and satisfying hunger, to support the sentence\'s claim that the conservation efforts are "well worth the effort." This transition echoes the passage\'s earlier claim that "the advantages of Greek yogurt outweigh the potential drawbacks of its production." Choices A, B, and C are incorrect because they inaccurately describe the sentence in question.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'as',
        explanation: 'Choice B provides a grammatically standard preposition that connects the verb "serves" and noun "digestive aid" and accurately depicts their relationship. Choice A is incorrect because the infinitive form "to be" yields a gramatically incorrect verb construction: "serves to be." Choice C and D are incorrect because both present options that deviate from standard English usage.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'contains',
        explanation: 'Choice C presents a verb tense that is consistent in the context of the sentence. The choice is also free of the redundant "it." Choice A is incorrect because the subject "it" creates a redundacy. Choices B and D are incorrect because they present verb tenses that are inconsistent in the context of the sentence.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'NO CHANGE',
        explanation: 'Choice A properly introduces an additional health benefit in a series of sentences that list health benefits. "Also" is the logical and coherent choice to communicate an addition. Choices B, C, and D are incorrect because none of the transitions they offer logically fits the content that precedes or follows the proposed choice.',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Which is the correct option?',
        correct_answer: 'NO CHANGE',
        explanation: '"satiated" is the only choice that communicates effectively that Greek yogurt will satisfy hunger for a longer period of time. Choices B, C, and D are incorrect because each is improper usage in this context. A person can be "fulfilled" spiritually or in other ways, but a person who has eaten until he or she is no longer hungry cannot be described as fulfilled. Neither can he or she be described as being "complacent" or "sufficient."',
        exam_type: 'sat',
        exam_id: 3,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
