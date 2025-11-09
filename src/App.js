import './App.css';
import ToastContainer from './component/ToastContainer';
import { useToastContext } from './context/toast.context';

function App() {
  const { addErrorToast, addSuccessToast, addInfoToast, } = useToastContext()
  return (
    <div className="App">
      <button onClick={addSuccessToast}>Success</button>
      <button onClick={addErrorToast}>Error</button>
      <button onClick={addInfoToast}>Info</button>
      <ToastContainer />
    </div>
  );
}

export default App;
