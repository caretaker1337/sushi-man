import React, { createContext, useContext, useEffect, useReducer } from "react";
import { set as setToLocalStorage } from "local-storage";

import { TStore, globalStore } from "./globalStore";
import { TAction } from "./actions";
import { reducer } from "./reducer";

const AppContext = createContext<{
  store: TStore;
  dispatch: React.Dispatch<TAction>;
}>({
  store: globalStore,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, globalStore);

  useEffect((): void => {
    setToLocalStorage<TStore>("sushiManShopStorage", store);
  }, [store]);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useStore = () => useContext(AppContext);

export { AppContext, AppProvider, useStore };
