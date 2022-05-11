'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('topics', [
      {
        title: 'Literature and History reading',
        subject: 'english',
        week_number: 1,
        date: '2022-01-04',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Social passage and Science reading',
        subject: 'english',
        week_number: 2,
        date: '2022-01-11',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Writing section',
        subject: 'english',
        week_number: 3,
        date: '2022-01-18',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'English Final Exam',
        subject: 'english',
        week_number: 4,
        date: '2022-01-25',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Heart of algebra',
        subject: 'math',
        week_number: 1,
        date: '2022-01-07',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Passport to Advanced Math',
        subject: 'math',
        week_number: 2,
        date: '2022-01-14',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Problem Solving and Data Analysis',
        subject: 'math',
        week_number: 3,
        date: '2022-01-21',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Math Final Exam',
        subject: 'math',
        week_number: 4,
        date: '2022-01-28',
        course_id: 1,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Linear equations and inequalities',
        subject: 'math',
        week_number: 1,
        date: '2022-05-03',
        course_id: 2,
        recording_link: 'https://www.youtube.com/embed/I5z7oCalPnQ',
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Radicals and rational exponents',
        subject: 'math',
        week_number: 2,
        date: '2022-05-10',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Nonlinear equation graphs',
        subject: 'math',
        week_number: 3,
        date: '2022-05-17',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Functions',
        subject: 'math',
        week_number: 4,
        date: '2022-05-24',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Percents',
        subject: 'math',
        week_number: 5,
        date: '2022-05-31',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Table data',
        subject: 'math',
        week_number: 6,
        date: '2022-06-07',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Key features of graphs',
        subject: 'math',
        week_number: 7,
        date: '2022-06-14',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Data inferences',
        subject: 'math',
        week_number: 8,
        date: '2022-06-21',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Data collection and conclusions',
        subject: 'math',
        week_number: 9,
        date: '2022-06-28',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Right triangle',
        subject: 'math',
        week_number: 10,
        date: '2022-07-05',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Circle theorems and equations',
        subject: 'math',
        week_number: 11,
        date: '2022-07-12',
        course_id: 2,
        created_at: '2022-04-25 23:41:00.707+03',
        updated_at: '2022-04-25 23:41:00.707+03'
      },
      {
        title: 'Final Exam',
        subject: 'math',
        week_number: 12,
        date: '2022-07-19',
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
