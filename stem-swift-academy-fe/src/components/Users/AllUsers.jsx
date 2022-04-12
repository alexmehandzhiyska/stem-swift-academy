import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../services/userService';
import { errorNotification, successNotification, saveConfirmNotification } from '../notification'

import UserCard from './UserCard';
import LottieAnimation from '../LottieAnimation';
import './AllUsers.css'

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [usersRole, setUsersRole] = useState('all');
  const [modifiedUsers, setModifiedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    userService.getAll(currentPage, usersRole)
      .then(response => {
        setUsers(response.results);
        setPageInfo(response);
        setIsLoading(false);
      })
      .catch(error => {
        errorNotification(error.message);
      });

    return () => setModifiedUsers([]);
  }, [currentPage, usersRole]);

  const saveChanges = () => {
    userService.updateUsers(modifiedUsers)
      .then(() => {
        successNotification('Successfully saved new roles!');
        setModifiedUsers([]);
      })
      .catch(() => {
        errorNotification('There was an error saving the new roles. Please try again later!');
      });
  }

  const goBack = async () => {
    if (modifiedUsers.length > 0) {
      const confirmed = await saveConfirmNotification('You have made changes but you have not saved them. Are you sure you want to continue?');

      if (confirmed) {
        saveChanges();
      }
    } 
    
    navigate('/');
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="flex flex-col items-center">
          <h1 className="heading users-heading">All Users</h1>

          <select onChange={(e) => setUsersRole(e.target.value)} defaultValue={usersRole} name="subject-select" className="capitalize">
            <option value="all" className="capitalize">all</option>
            <option value="owner" className="capitalize">owner</option>
            <option value="teacher" className="capitalize">teacher</option>
            <option value="student" className="capitalize">student</option>
          </select>

          <article className="tests">
            {users.length === 0 ? 'No users yet!' : users.map(u => <UserCard key={u.id} user={u} modifiedUsers={modifiedUsers} setModifiedUsers={setModifiedUsers}></UserCard>)}
          </article>

          <article className="mt-5 mb-20 flex">
            <button onClick={saveChanges} className="mx-5 btn disabled:cursor-not-allowed" disabled={modifiedUsers.length === 0 ? true : false}>Save</button>
            <button onClick={goBack} className="mx-5 btn secondary-btn">Back</button>
          </article>

          <article className="flex text-xl text-blue-500">
            <button onClick={() => setCurrentPage(pageInfo.previous ? currentPage - 1 : currentPage)} className='px-5 btn pagination-btn' disabled={!pageInfo.previous}>Previous</button>
            <p className="mx-5 mb-10 px-4 py-2 border-2 border-solid border-blue-500 rounded-full">{currentPage}</p>
            <button onClick={() => setCurrentPage(pageInfo.next ? currentPage + 1 : currentPage)} className='px-5 btn pagination-btn' disabled={!pageInfo.next}>Next</button>
          </article>
        </section>
      }
    </>
  );
}

export default AllUsers;