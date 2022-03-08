const getAll = async () => {
  const response = await fetch(`/courses`, { credentials: 'include' });
  const data = await response.json();
  const courses = data.data.courses.sort((a, b) => a.duration - b.duration);

  if (!response.ok) {
    console.log(data);
    throw new Error(data);
  }

  return courses;
}

const getOne = async (courseId) => {
  const response = await fetch(`/courses/${courseId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getCourses = async (userId) => {
  const response = await fetch(`/courses?userId=${userId}`);
  const data = await response.json();

  return data;
}

const registerUser = async (courseId, userId) => {
  const response = await fetch(`/courses/${courseId}/register`, {
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

  return data.status;
}

export const courseService = { getAll, getOne, registerUser, getCourses };