import {
  personalDetailError,
  personalDetailPending,
  personalDetailSuccess,
} from "../const/action";
let initialState = {
  personalDetail: {name:"pankaj",age:25},
  error: null,
  pending: false,
};

export const personalDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case personalDetailSuccess:
      return {
        ...state,
        pending: false,
        personalDetail: action.payload,
      };
    case personalDetailPending:
      return {
        ...state,
        pending: true,
      };
    case personalDetailError:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
