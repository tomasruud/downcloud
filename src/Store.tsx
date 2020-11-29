import React, {
  Dispatch,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";

type Action =
  | { type: "session/token/fetch" }
  | { type: "session/token/error"; payload: any }
  | { type: "session/token/set"; payload: string };

type State = {
  session: {
    token: string;
    loading: boolean;
    error: any | null;
  };
};

const initialState: State = {
  session: {
    token: "",
    loading: false,
    error: null,
  },
};

const Store = React.createContext<{ state: State; dispatch: Dispatch<Action> }>(
  {
    state: initialState,
    dispatch: () => null,
  }
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "session/token/set":
      return {
        ...state,
        session: {
          ...state.session,
          loading: false,
          token: action.payload,
        },
      };

    case "session/token/fetch":
      return {
        ...state,
        session: {
          ...state.session,
          loading: true,
          error: null,
        },
      };

    case "session/token/error":
      return {
        ...state,
        session: {
          ...state.session,
          loading: false,
          error: action.payload,
        },
      };
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
