'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('topics', [
      {
        title: 'Literature and History reading',
        subject: 'english',
        week_number: 1,
        start_time: '2022-01-04',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Social passage and Science reading',
        subject: 'english',
        week_number: 2,
        start_time: '2022-01-11',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Writing section',
        subject: 'english',
        week_number: 3,
        start_time: '2022-01-18',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'English Final Exam',
        subject: 'english',
        week_number: 4,
        start_time: '2022-01-25',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Heart of algebra',
        subject: 'math',
        week_number: 1,
        start_time: '2022-01-07',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Passport to Advanced Math',
        subject: 'math',
        week_number: 2,
        start_time: '2022-01-14',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Problem Solving and Data Analysis',
        subject: 'math',
        week_number: 3,
        start_time: '2022-01-21',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Math Final Exam',
        subject: 'math',
        week_number: 4,
        start_time: '2022-01-28',
        duration: 2,
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Linear equations and inequalities',
        subject: 'math',
        week_number: 1,
        start_time: '2022-05-03',
        duration: 2,
        course_id: 2,
        recording_link: 'https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versUSE323TwLfEmKc972Jam0gChHepLNzsysyPhRwO5j4WI3geyhMCI&playbackInfo=eyJ2aWRlb0lkIjoiYTI3MjZhYjMxZDEwNDAwYmJlNWI0NmMxMTE1NmIwNTUifQ==',
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Radicals and rational exponents',
        subject: 'math',
        week_number: 2,
        start_time: '2022-05-10',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Nonlinear equation graphs',
        subject: 'math',
        week_number: 3,
        start_time: '2022-05-17',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Functions',
        subject: 'math',
        week_number: 4,
        start_time: '2022-05-24',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Percents',
        subject: 'math',
        week_number: 5,
        start_time: '2022-05-31',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Table data',
        subject: 'math',
        week_number: 6,
        start_time: '2022-06-07',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Key features of graphs',
        subject: 'math',
        week_number: 7,
        start_time: '2022-06-14',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Data inferences',
        subject: 'math',
        week_number: 8,
        start_time: '2022-06-21',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Data collection and conclusions',
        subject: 'math',
        week_number: 9,
        start_time: '2022-06-28',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Right triangle',
        subject: 'math',
        week_number: 10,
        start_time: '2022-07-05',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Circle theorems and equations',
        subject: 'math',
        week_number: 11,
        start_time: '2022-07-12',
        duration: 2,
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Final Exam',
        subject: 'math',
        week_number: 12,
        start_time: '2022-07-19',
        duration: 2,
        course_id: 2,
        exam_link: 'http://localhost:3000/exams/sat/1',
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('topics', null, {});
  }
};
