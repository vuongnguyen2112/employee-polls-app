import { _getQuestions, _getUsers } from "../_DATA";

export const checkLogin = async (username, password) => {
  const users = await _getUsers();
  if (users[username] && users[username].password === password) {
    return true;
  }

  return false;
};

export const fetchPolls = async () => await _getQuestions();

export const fetchUsers = async () => await _getUsers();
