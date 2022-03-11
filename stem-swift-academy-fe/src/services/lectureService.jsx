const getAll = async () => {
  const response = await fetch(`/courses/lectures`, { credentials: 'include' });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (courseId, lectureId) => {
  const response = await fetch(`/courses/${courseId}/lectures/${lectureId}`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    console.log(data);
    throw new Error(data);
  }

  return data;
}

export const lectureService = { getAll, getOne };