import { ROUTES } from "../../util/routes";
import { postRequest } from "../../util/api";

export function UserLoginAction(dispatch, history, name) {
  console.log(name);
  if (name.trim()) {
    dispatch({ type: "USER_LOGIN", payload: name });
    history.push(ROUTES.game_options);
  }
}

export const SaveUserScoreAction = async data => {
  const payload = await postRequest("user", {
    ...data
  });
  return payload;
};
