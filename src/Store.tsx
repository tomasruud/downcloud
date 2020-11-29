import React, {
  Dispatch,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";

type Action = { type: "setToken"; payload: string };

type State = {
  token: string;
};

const initialState: State = {
  token: "",
};

const Store = React.createContext<{ state: State; dispatch: Dispatch<Action> }>(
  {
    state: initialState,
    dispatch: () => null,
  }
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setToken":
      return { ...state, token: action.payload };
  }

  return state;
};

export const Provider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export const useStore = () => useContext(Store);
