import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRoute = () => {
  let stateUser = useSelector((state) => state.user.value);
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = user ? true : false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const GuestRoute = () => {
  let stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));

  const isAuthenticated = user ? true : false;

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

const RoleRoute = () => {
  let stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
  const role = user ? user.role : null;

  return role === 'teacher' || role === 'owner' ? <Outlet /> : <Navigate to="/" />
}

const OwnerRoute = () => {
  let stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
  const role = user ? user.role : null;

  return role === 'owner' ? <Outlet /> : <Navigate to="/" />
}

export { UserRoute, GuestRoute, RoleRoute, OwnerRoute };