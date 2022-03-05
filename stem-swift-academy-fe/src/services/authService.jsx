import { baseUrl } from '../constants';

const register = async (name, email, password) => {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const logout = async () => {
  const response = await fetch(`${baseUrl}/auth/logout`, { credentials: 'include' });
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
}

const getAll = async () => {
  const response = await fetch(`${baseUrl}/auth`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const getOne = async (userId) => {
  const response = await fetch(`${baseUrl}/auth/${userId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
}

const updateUsers = async (users) => {
  const response = await fetch(`${baseUrl}/auth`, {
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

export const authService = { register, login, logout, getAll, getOne, updateUsers };