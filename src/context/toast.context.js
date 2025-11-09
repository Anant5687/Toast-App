import { createContext, useContext } from 'react';

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
  const context = useContext(ToastContextProvider);
  return context;
};
