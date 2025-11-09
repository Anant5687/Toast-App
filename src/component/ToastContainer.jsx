import React from 'react';
import { useToastContext } from '../context/toast.context';
import Toast from './Toast';

const ToastContainer = () => {
  const { state } = useToastContext();
  return (
    <div>
      {state?.toasts?.map((ele, index) => (
        <Toast message={ele?.message} type={ele?.type} key={index} />
      ))}
    </div>
  );
};

export default ToastContainer;
