import { Soundcloud } from "../services";

export const get = () => async (dispatch) => {
  dispatch({ type: "REQUEST_USER" });

  const user = await Soundcloud.getMe();

  return dispatch({
    type: "RECEIVE_USER",
    user,
  });
};
