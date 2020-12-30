const initialState = {
  data: {},
  currentUserDialog: 123,
};

const user = function (state = initialState, { type, payload }) {
  switch (type) {
    case "SET_USER":
      return {
        data: payload,
      };
    case "SET_USER_CURRENT_DIALOG":
      return {
        ...state,
        userCurrentDialog: payload,
      };
    default:
      return state;
  }
};

export default user;
