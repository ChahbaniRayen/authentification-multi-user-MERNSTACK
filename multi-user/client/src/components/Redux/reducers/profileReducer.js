import { SET_PROFILE, SET_PROFILES } from "../type";

const initialState = {
  profile: {},
  profiles:[]
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };

    default:
      return state;
  }
}
