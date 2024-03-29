import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { logout } from '../../store';
import { authService } from '../../services/authService';
import { examTypes, courseTypes } from '../../constants';
import { errorNotification } from '../notification';
import { useState } from 'react';

const Header = () => {
  const stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [examSubmenuOpened, setExamSubmenuOpened] = useState(false);
  const [courseSubmenuOpened, setCourseSubmenuOpened] = useState(false);

  const onLogout = () => {
    authService.logout()
      .then(() => {
        localStorage.removeItem('user');
        dispatch(logout());
        navigate('/');
      })
      .catch(() => {
        errorNotification('There was an error logging you out. Please try again later!');
      });
  }

  const guestNav = (
    <>
      <li className="nav-item px-2 mx-4 text-xl"><Link to="/login">Login</Link></li>
      <li className="nav-item px-2 mx-4 text-xl"><Link to="/register">Register</Link></li>
    </>
  );

  const userNav = (
    <>
      <li className="nav-item px-2 mx-4 text-xl">
        <Link to="/exams/sat/subject">Practice Exams</Link>
        <FontAwesomeIcon icon={faAngleDown} className="ml-3" onClick={() => setExamSubmenuOpened(!examSubmenuOpened)}></FontAwesomeIcon>
        <ul className={`${examSubmenuOpened ? 'flex z-10' : 'hidden z-10'} flex-col absolute bg-blue-500 -mt-1 pt-4`}>
          {examTypes.map((examType, i) => <li key={i} className="py-2 pl-5 pr-20" onClick={() => setExamSubmenuOpened(false)}><Link to={`/exams/${examType.endpoint}`}>{examType.name}</Link></li>)}
        </ul>
      </li>

      <li className="nav-item px-2 mx-4 text-xl">
        <Link to="/courses">Courses</Link>
        <FontAwesomeIcon icon={faAngleDown} className="ml-3" onClick={() => setCourseSubmenuOpened(!courseSubmenuOpened)}></FontAwesomeIcon>
        <ul className={`${courseSubmenuOpened ? 'flex z-10' : 'hidden z-10'} flex-col absolute bg-blue-500 -mt-1 pt-4`}>
          {courseTypes.map((courseType, i) => <li key={i} className="py-2 pl-5 pr-20" onClick={() => setCourseSubmenuOpened(false)}><Link to={`/courses/${courseType.endpoint}`}>{courseType.name}</Link></li>)}
        </ul>
      </li>
      {user?.role === 'student' && <li className="nav-item px-2 mx-4 text-xl"><Link to="/calendar">Calendar</Link></li>}
      {user?.role === 'student' && <li className="nav-item px-2 mx-4 text-xl"><Link to='/notebook'>Notebook</Link></li>}
      {user?.role === 'student' && <li className="nav-item px-2 mx-4 text-xl"><Link to={`/users/${user?.id}`}>My Profile</Link></li>}
      {user?.role === 'owner' && <li className="nav-item px-2 mx-4 text-xl"> <Link to="/users">Users</Link></li>}
      <li className="logout-btn nav-item px-2 mx-4 text-xl cursor-pointer" onClick={onLogout}>Logout</li>
    </>
  );
  return (
    <header className="flex justify-between px-10 py-1 bg-blue-500 text-white max-w-full">
      <section className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="w-56 mx-3" src="https://res.cloudinary.com/drinka/image/upload/v1647941133/sat-academy/images/ssa-logo-shrinked_bgrqz1.png" alt="STEM Swift Academy logo" />
        </Link>
      </section>

      <section className="flex items-center">
        <nav className="header-nav">
          <ul className="flex">
            <li className="nav-item px-2 mx-4 text-xl"><Link to="/contacts">Contacts</Link></li>
            {user?.id ? userNav : guestNav}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;