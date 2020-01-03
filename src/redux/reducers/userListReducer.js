/* eslint-disable no-debugger */
import { REMOVE_USER, ADD_USER } from '../actionTypes';
console.log(REMOVE_USER)
const initialState = {
  users: [
    {
      id: 1,
      firstName: "Alexandr",
      lastName: "Zakharov",
      eMail: "alex.zakharov98@gmail.com",
      removeRequest: false,
      isAdmin: true
    },
    {
      id: 2,
      firstName: "Rayan",
      lastName: "Goosling",
      eMail: "jack.nicholson@gmail.com",
      removeRequest: false,
      isAdmin: false
    },
    {
      id: 3,
      firstName: "Thomas",
      lastName: "Edison",
      eMail: "undefined@gmail.com",
      removeRequest: true,
      isAdmin: false
    },
    {
      id: 4,
      firstName: "Marshall",
      lastName: "Mathers",
      eMail: "mandm@gmail.com",
      removeRequest: false,
      isAdmin: false
    },
    {
      id: 5,
      firstName: "Tom",
      lastName: "Hardy",
      eMail: "hardytom@gmail.com",
      removeRequest: true,
      isAdmin: false
    }
  ]
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      state.users = state.users.filter(user => user.id !== action.user)
      return state;
    default:
      return state;
  }
};

export const removeUserActionCreator = user => {
  return {
    type: REMOVE_USER,
    user: user
  };
};

export default userListReducer;