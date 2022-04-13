const getAll = async (subject) => {
  const response = await fetch(`/exams/${subject}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (subject, examId) => {
  const response = await fetch(`/exams/${subject}/${examId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
}

const createOne = async (exam) => {
  const response = await fetch(`/exams`, {
    method: 'POST',
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

const updateOne = async (subject, examId, exam) => {
  const response = await fetch(`/exams/${subject}/${examId}`, {
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

const deleteOne = async (subject, examId) => {
  const response = await fetch(`/exams/${subject}/${examId}`, {
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

const getQuestions = async (subject, examId, shuffled) => {
  const response = await fetch(`/exams/${subject}/${examId}/questions?shuffled=${shuffled}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const submitAnswers = async (subject, examId, userAnswers) => {
  const response = await fetch(`/exams/${subject}/${examId}/questions`, {
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

const getScore = async (subject, examId) => {
  const response = await fetch(`/exams/${subject}/${examId}/results`, { credentials: 'include' });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}
export const examService = { getAll, getOne, createOne, updateOne, deleteOne, getQuestions, submitAnswers, getScore };