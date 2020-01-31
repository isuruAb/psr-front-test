import { ROUTES } from "../../util/routes";
import { postRequest, getRequest } from "../../util/api";

export function UserLoginAction(dispatch, history, name) {
  if (name.trim()) {
    dispatch({ type: "USER_LOGIN", payload: name });
    history.push(ROUTES.game_options);
  }
}

export const SaveUserScoreAction = data => {
  const payload = postRequest("user", {
    ...data
  });
  return payload;
};

export const GetUserScoreAction = async dispatch => {
  const payload = await getRequest("user");
  dispatch({ type: "GET_SCORES", payload: payload });
};
