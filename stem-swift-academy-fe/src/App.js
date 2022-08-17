import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import AllCourses from "./components/Courses/AllCourses";
import AllExams from "./components/Exams/AllExams/AllExams";
import AllKolbs from "./components/Kolbs/AllKolbs/AllKolbs";
import AllUsers from "./components/Users/AllUsers";
import Contacts from "./components/Contacts/Contacts";
import CourseDetails from "./components/Courses/CourseDetails/CourseDetails";
import CreateExam from "./components/Exams/CreateExam/CreateExam";
import CreateKolbs from "./components/Kolbs/CreateKolb/CreateKolb";
import Home from "./components/Home/Home";
import ExamDetails from "./components/Exams/ExamDetails/ExamDetails";
import ExamQuestions from "./components/Exams/ExamQuestions/ExamQuestions";
import ExamResults from "./components/Exams/ExamResults/ExamResults";
import Layout from "./components/layout/Layout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register/Register";
import StudentCalendar from "./components/Calendar/Calendar";
import SubjectChoice from "./components/Exams/SubjectChoice/SubjectChoice";
import Topic from "./components/Courses/Plan/Topic/Topic";
import UserProfile from "./components/UserProfile/UserProfile";

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
            <Route path="/courses/:courseType" exact element={<AllCourses />}></Route> 
            <Route path="/courses/:courseType/:courseId" element={<CourseDetails />}></Route> 
            <Route path="/courses/:courseType/:courseId/topics/:topicId" element={<Topic />}> </Route>
            <Route path="/calendar" element={<StudentCalendar />}></Route>
            <Route path="/exams/:examType" element={<AllExams />}></Route>
            <Route path="/exams/:examType/subject" element={<SubjectChoice />}></Route>
            <Route path="/exams/:examType/:examId" element={<ExamDetails />}></Route>
            <Route path="/exams/:examType/:examId/questions" element={<ExamQuestions />}></Route>
            <Route path="/exams/:examType/:examId/results" element={<ExamResults />}></Route>
            <Route path="/users/:studentId" element={<UserProfile />}></Route>
            <Route path="/notebook" element={<AllKolbs />}></Route>
            <Route path="/notebook/create" element={<CreateKolbs />}></Route>
          </Route>
          <Route element={<RoleRoute />}>
              <Route path="/exams/:examType/create" element={<CreateExam mode="create" />}></Route>
              <Route path="/exams/:examType/:examId/edit" element={<CreateExam mode="edit" />} ></Route>
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
