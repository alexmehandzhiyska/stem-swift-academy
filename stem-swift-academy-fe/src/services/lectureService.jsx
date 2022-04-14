const getAll = async () => {
  const response = await fetch(`/courses/lectures`, { credentials: 'include' });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (courseId, topicId) => {
  const response = await fetch(`/courses/${courseId}/lectures/${topicId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

export const lectureService = { getAll, getOne };