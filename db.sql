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