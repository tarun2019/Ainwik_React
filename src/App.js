// Topic1: import  vs  named import  vs  import as  vs  import * as 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesComp from './Routes';

function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
        <RoutesComp />
      </BrowserRouter>
    </div>
  );
}

export default App;