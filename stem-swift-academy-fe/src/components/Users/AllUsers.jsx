import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { errorNotification, successNotification, saveConfirmNotification } from '../notification'

import UserCard from './UserCard';
import LottieAnimation from '../LottieAnimation';
import './AllUsers.css'

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [modifiedUsers, setModifiedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    authService.getAll()
      .then(response => {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
        setIsLoading(false);
      })
      .catch(error => {
        errorNotification(error.message);
      })

    return () => setModifiedUsers([]);
  }, []);

  const filterUsers = (event) => {
    const role = event.target.value;
    const filtered = role === 'all' ? users : users.filter(e => e.role === role);
    setFilteredUsers(filtered);
  }

  const saveChanges = () => {
    authService.updateUsers(modifiedUsers)
      .then(response => {
        successNotification('Successfully saved new roles!');
        setModifiedUsers([]);
      })
      .catch(error => {
        errorNotification('There was an error saving the new roles. Please try again later!');
      });
  }

  const goBack = async () => {
    if (modifiedUsers.length > 0) {
      const confirmed = await saveConfirmNotification('You have made changes but you have not saved them. Are you sure you want to continue?');

      if (confirmed) {
        saveChanges();
      }
      navigate('/');
    } else {
      navigate('/');
    }
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="flex flex-col items-center">
          <h1 className="heading users-heading">All Users</h1>

          <select onChange={filterUsers} name="subject-select" className="capitalize">
            <option value="all" className="capitalize" default>all</option>
            <option value="owner" className="capitalize">owner</option>
            <option value="teacher" className="capitalize">teacher</option>
            <option value="student" className="capitalize">student</option>
          </select>

          <article className="tests">
            {filteredUsers.length === 0 ? 'No users yet!' : filteredUsers.map(u => <UserCard key={u.id} user={u} modifiedUsers={modifiedUsers} setModifiedUsers={setModifiedUsers}></UserCard>)}
          </article>

          <article className="mt-5 mb-20 flex">
            <button onClick={saveChanges} className="mx-5 btn disabled:cursor-not-allowed" disabled={modifiedUsers.length === 0 ? true : false}>Save</button>
            <button onClick={goBack} className="mx-5 btn secondary-btn">Back</button>
          </article>
        </section>
      }
    </>
  );
}

export default AllUsers;