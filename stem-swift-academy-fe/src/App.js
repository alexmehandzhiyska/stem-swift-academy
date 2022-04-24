import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import AllCourses from "./components/Courses/AllCourses";
import AllExams from "./components/Exams/AllExams/AllExams";
import AllUsers from "./components/Users/AllUsers";
import Contacts from "./components/Contacts/Contacts";
import CourseDetails from "./components/Courses/CourseDetails/CourseDetails";
import CreateExam from "./components/Exams/CreateExam/CreateExam";
import Home from "./components/Home/Home";
import ExamDetails from "./components/Exams/ExamDetails/ExamDetails";
import ExamQuestions from "./components/Exams/ExamQuestions/ExamQuestions";
import ExamResults from "./components/Exams/ExamResults/ExamResults";
import Layout from "./components/layout/Layout";
import Topic from "./components/Courses/Plan/Topic/Topic";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register/Register";
import StudentCalendar from "./components/Calendar/Calendar";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import SubjectChoice from "./components/Exams/SubjectChoice/SubjectChoice";
import CreateKolbs from "./components/Kolbs/CreateKolb/CreateKolb";
import AllKolbs from "./components/Kolbs/AllKolbs/AllKolbs";

import {
  UserRoute,
  GuestRoute,
  RoleRoute,
  OwnerRoute,
} from "./components/common/GuardedRoute";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route element={<GuestRoute />}>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
          <Route element={<UserRoute />}>
            <Route path="/courses" exact element={<AllCourses />}></Route> 
            <Route path="/courses/:courseId" element={<CourseDetails />}></Route> 
            <Route path="/courses/:courseId/topics/:topicId" element={<Topic />}> </Route>
            <Route path="/calendar" element={<StudentCalendar />}></Route>
            <Route path="/exams" element={<SubjectChoice />}></Route>
            <Route path="/exams/:subject" element={<AllExams />}></Route>
            <Route path="/exams/:subject/:examId" element={<ExamDetails />}></Route>
            <Route path="/exams/:subject/:examId/questions" element={<ExamQuestions />}></Route>
            <Route path="/exams/:subject/:examId/results" element={<ExamResults />}></Route>
            <Route path="/students/:studentId" element={<StudentProfile />}></Route>
            <Route path="/notebooks/:studentId" element={<AllKolbs />}></Route>
            <Route path="/notebooks/:studentId/create" element={<CreateKolbs />}></Route>
          </Route>
          <Route element={<RoleRoute />}>
              <Route path="/exams/create" element={<CreateExam mode="create" />}></Route>
              <Route  path="/exams/:subject/:examId/edit" element={<CreateExam mode="edit" />} ></Route>
              <Route element={<OwnerRoute />}>
                <Route path="/users" element={<AllUsers />}> </Route>
              </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
