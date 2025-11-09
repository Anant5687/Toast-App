import { createContext, useContext, useReducer } from 'react';

const ToastContext = createContext();

function toastReducer(state, action) {
  return {
    ...state,
    toasts: [...state.toasts, action.payload],
  };
}

export const ToastContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

  const addToast = (message, type) => {
    dispatch({ type, payload: { message, type } });
  };

  const addErrorToast = () => {
    addToast('OOps something went wrong', 'error');
  };

  const addSuccessToast = () => {
    addToast('Data parsed', 'success');
  };

  const addInfoToast = () => {
    addToast('No data found', 'info');
  };

  const value = { addErrorToast, addSuccessToast, addInfoToast, state };

  console.log({ state });

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  return context;
};
