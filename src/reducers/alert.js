const initialState = {
  isShow: false,
  alertType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_ALERT':
      return {
        isShow: true,
        alertType: action.alertType,
      };
    case 'CLOSE_ALERT':
      return initialState;
    default:
      return state;
  }
};
