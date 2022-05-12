const getAll = async (page, role) => {
    const response = await fetch(`/api/users?page=${page}&limit=10&role=${role}`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data);
    }
  
    return data;
}
  
const getOne = async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
}

const getUserExams = async (userId) => {
    const response = await fetch(`/api/users/${userId}/exams`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data);
    }
  
    return data;
}
  
const updateUsers = async (users) => {
    const response = await fetch(`/api/users`, {
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

const updateOne = async (userId, user) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data);
    }
  
    return data;
  }

export const userService = { getAll, getOne, getUserExams, updateUsers, updateOne };