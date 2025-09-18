import { CHANGE_COMPANY } from "../constants/type";

type ActionTypes = {
  type: string;
};

const companyReducer = (state = "Rikkei Academy", action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return "RikkeiSoft";
    default:
      return state;
  }
};

export default companyReducer;
