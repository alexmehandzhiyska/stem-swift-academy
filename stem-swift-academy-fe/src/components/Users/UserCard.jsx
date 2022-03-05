const UserCard = ({ user, modifiedUsers, setModifiedUsers }) => {
  const changeRole = (e) => {
    const role = e.target.value;
    setModifiedUsers([...modifiedUsers, { id: user.id, role }]);
  }

  return (
    <section className="user flex justify-start">
      <p className="user-name w-1/3">{user.name}</p>
      <p className="user-email w-1/3">{user.email}</p>

      <select onChange={changeRole} name="user-role w-1/3" className="user-role capitalize" defaultValue={user.role}>
        <option value="owner" className="capitalize">owner</option>
        <option value="teacher" className="capitalize">teacher</option>
        <option value="student" className="capitalize">student</option>
      </select>
    </section >
  );
}

export default UserCard;