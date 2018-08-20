export const msgReducer = (
  state = {
    urls: {
      user1:
        "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg",
      user2:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/madcitygg-profile_image-d182e6f9183999a2-300x300.jpeg"
    },
    messages: [
      {
        user: "user1",
        msg: "msg1"
      },
      {
        user: "user2",
        msg: "msg2"
      }
    ],
    currentUser: "user2"
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_USER":
      return Object.assign({}, state, { currentUser: action.userValue });
    case "ADD_NEW_MSG":
      let oldmsgs = state.messages;
      oldmsgs.push(action.msg);
      return Object.assign({}, state, { messages: oldmsgs });
    default:
      return state;
  }
};
