import './App.css';
import Toast from './component/Toast';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', flexDirection: "column", width: "50%", justifyContent: 'center'}}>
      <Toast type={'success'} message={"Data resolved"} />
      <Toast type={'error'} message={"Oops something wet wrong"} />
      <Toast type={'info'} message={"Hello here"} />
      </div>

    </div>
  );
}

export default App;
