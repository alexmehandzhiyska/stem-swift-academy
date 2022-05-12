const getAll = async (examType, subject) => {
  let url = subject ? `/api/exams/${examType}?subject=${subject}` : `/api/exams/${examType}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (examType, examId) => {
  const response = await fetch(`/api/exams/${examType}/${examId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
}

const createOne = async (exam) => {
  const response = await fetch(`/api/exams`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exam)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
}

const updateOne = async (examType, examId, exam) => {
  const response = await fetch(`/api/exams/${examType}/${examId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(exam)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const deleteOne = async (examType, examId) => {
  const response = await fetch(`/api/exams/${examType}/${examId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getQuestions = async (examType, examId, shuffled) => {
  const response = await fetch(`/api/exams/${examType}/${examId}/questions?shuffled=${shuffled}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const submitAnswers = async (examType, examId, userAnswers) => {
  const response = await fetch(`/api/exams/${examType}/${examId}/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userAnswers)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getScore = async (examType, examId) => {
  const response = await fetch(`/api/exams/${examType}/${examId}/results`, { credentials: 'include' });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}
export const examService = { getAll, getOne, createOne, updateOne, deleteOne, getQuestions, submitAnswers, getScore };