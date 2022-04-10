const getAll = async () => {
    const response = await fetch(`/users`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data);
    }
  
    return data;
}
  
const getOne = async (userId) => {
    const response = await fetch(`/users/${userId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
}
  
const updateUsers = async (users) => {
const response = await fetch(`/users`, {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ users })
});

const data = await response.json();

if (!response.ok) {
    throw new Error(data);
}

return data;
}

export const userService = { getAll, getOne, updateUsers };