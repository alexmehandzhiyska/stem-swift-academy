const getExams = async (studentId) => {
  const response = await fetch(`/students/${studentId}`);
  const data = await response.json();
  const text = await response.text();
  console.log(text);

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

export const studentService = { getExams };