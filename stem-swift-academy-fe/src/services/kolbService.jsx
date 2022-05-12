const getByUser = async (userId) => {
  const response = await fetch(`/api/notebooks/${userId}`, { credentials: 'include' });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (courseId) => {
  const response = await fetch(`/api/courses/${courseId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const createOne = async (content, userId) => {
  const response = await fetch(`/api/notebooks/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(content)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

export const kolbService = { getByUser, getOne, createOne };