import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
 import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignInSide from "./pages/SignInSide";
import SignupTeacher from './pages/SignupTeacher';
import SignupStudent from './pages/SignupStudent';
import TutorHomePage from './components/TutorHomePage';
import TutorDashboard from './components/TutorDashboard';
import CreateCourse from './components/CreateCourse';
import ViewDetails from './components/ViewDetails';
import CreateQuizPage from './components/createQuizPage';
import AdminDashboard from './components/AdminDashboard';
import CourseManagement from './components/CourseManagement';
import './App.css';
import ContentPage from './components/ContentPage';
import UserDetails from './components/UserDetails';
import AdminAnalytics from './components/AdminAnalytics';
import EditCourse from './components/EditCourse';
import {NoPageFound} from './components/NoPageFound';
function App() {
  return (
    <Router>
      <div>
       {/* <Navbar />  */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<SignInSide/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/courses/:id" element={<><Navbar/><SingleCourse /></>} />
          <Route path="/category/:category" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SignupTeacher" element={<SignupTeacher />} />
          <Route path="/SignupStudent" element={<SignupStudent />} />
          <Route path="/TutorHomePage" element={<TutorHomePage />} />
          <Route path="/TutorDashboard" element={<TutorDashboard />} />
          <Route path="/CreateCourse" element={<CreateCourse />} />
          <Route path="/ViewDetails" element={<ViewDetails />} />
          <Route path="/CreateQuizPage" element={<CreateQuizPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
         <Route path="/CourseManagement" element={<CourseManagement />} />
         <Route path="/content/:courseId/:contentId" element={<ContentPage />} />
         <Route path="/UserDetails" element={<UserDetails />} />
         <Route path = "/AdminAnalytics" element={<AdminAnalytics/>}/>
         <Route path = "/EditCourse" element={<EditCourse/>}/>
         <Route path = "*" element={<NoPageFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
