export const changeUser = user => {
  return {
    type: "CHANGE_ACTIVE_USER",
    userValue: user
  };
};

export const addMessage = (user, msg) => {
  return {
    type: "ADD_NEW_MSG",
    msg: {
      user: user,
      msg: msg
    }
  };
};
