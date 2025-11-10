import './App.css';
import Search from './component/search';
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

      <Search />
    </div>
  );
}

export default App;
