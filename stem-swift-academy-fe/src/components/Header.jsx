import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "../services/authService";
import { errorNotification } from "./notification";

const Header = () => {
  const stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      localStorage.removeItem('user');
      await authService.logout();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      errorNotification('There was an error logging you out. Please try again later!');
    }
  }

  const guestNav = (
    <>
      <li className="px-2 mx-4 text-xl"><Link to="/login">Login</Link></li>
      <li className="px-2 mx-4 text-xl"><Link to="/register">Register</Link></li>
    </>
  );

  const userNav = (
    <>
      <li className="px-2 mx-4 text-xl"><Link to="/exams">Practice tests</Link></li>
      <li className="px-2 mx-4 text-xl"><Link to="/courses">Courses</Link></li>
      {user?.role === 'student' && <li className="px-2 mx-4 text-xl"><Link to="/calendar">Calendar</Link></li>}
      {user?.role === 'student' && <li className="px-2 mx-4 text-xl"><Link to={`/students/${user?.id}`}>My Profile</Link></li>}
      {user?.role != 'student' && <li className="px-2 mx-4 text-xl"><Link to="/exams/create">Create Exam</Link></li>}
      {user?.role === 'owner' && <li className="px-2 mx-4 text-xl"> <Link to="/users">Users</Link></li>}
      <li className="logout-btn px-2 mx-4 text-xl cursor-pointer" onClick={onLogout}>Logout</li>
    </>
  );
  return (
    <header className="flex justify-between px-10 py-1 bg-blue-500 text-white max-w-full">
      <section className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="w-14 mx-3"
            src="https://res.cloudinary.com/drinka/image/upload/v1641821825/sat-academy/images/STEM_Swift_Academy_4_rs5k5m.png"
            alt="STEM Swift Academy logo" />
          <h1 className="ml-5 text-3xl text-white font-medium">STEM Swift Academy</h1>
        </Link>
      </section>

      <section className="flex items-center">
        <nav>
          <ul className="flex">
            <li className="px-2 mx-4 text-xl"><Link to="/contacts">Contacts</Link></li>
            {user?.id ? userNav : guestNav}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;