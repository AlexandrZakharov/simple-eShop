/* eslint-disable no-debugger */
import { REMOVE_USER, ADD_USER, CHECK_USER } from '../actionTypes';
console.log(REMOVE_USER)
const initialState = {
  users: [
    {
      id: 1,
      firstName: "Alexandr",
      lastName: "Zakharov",
      eMail: "alex.zakharov2802@gmail.com",
      password: '123123Alex',
      removeRequest: false,
      isAdmin: true
    },
    {
      id: 2,
      firstName: "Rayan",
      lastName: "Goosling",
      eMail: "jack.nicholson@gmail.com",
      password: '123123Alex',
      removeRequest: false,
      isAdmin: false
    },
    {
      id: 3,
      firstName: "Thomas",
      lastName: "Edison",
      eMail: "undefined@gmail.com",
      password: '123123Alex',
      removeRequest: true,
      isAdmin: false
    },
    {
      id: 4,
      firstName: "Marshall",
      lastName: "Mathers",
      eMail: "mandm@gmail.com",
      password: '123123Alex',
      removeRequest: false,
      isAdmin: false
    },
    {
      id: 5,
      firstName: "Tom",
      lastName: "Hardy",
      eMail: "hardytom@gmail.com",
      password: '123123Alex',
      removeRequest: true,
      isAdmin: false
    }
  ],
  authorizedUser: {}
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(user => user.id !== action.user)
        ]
      };
    case CHECK_USER:
      let user = state.users.filter(user => user.eMail === action.user.email)
      if(user[0] && user[0].password === action.user.password) {
        state.authorizedUser = user[0]
      }
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

export const checkUserActionCreator = user => {
  return {
    type: CHECK_USER,
    user: user
  };
}

export default userListReducer;
