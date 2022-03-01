import { baseUrl } from '../constants';

const getExams = async (studentId) => {
  const response = await fetch(`${baseUrl}/students/${studentId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

export const studentService = { getExams };