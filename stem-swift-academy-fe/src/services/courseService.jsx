const getAll = async () => {
  const response = await fetch(`/api/courses`, { credentials: 'include' });
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data);
  }
  
  const courses = data.sort((a, b) => a.duration - b.duration);
  return courses;
}

const getOne = async (courseId) => {
  const response = await fetch(`/api/courses/${courseId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getCourses = async (userId) => {
  const response = await fetch(`/api/courses?userId=${userId}`);
  const data = await response.json();

  return data;
}

const registerUser = async (courseId, userId) => {
  const response = await fetch(`/api/courses/${courseId}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

export const courseService = { getAll, getOne, registerUser, getCourses };