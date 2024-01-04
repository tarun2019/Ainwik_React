// Topic1: import  vs  named import  vs  import as  vs  import * as 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesComp from './Routes';
// import Portal2Index from './portal2/portalIndex';

function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
        <RoutesComp />
      {/* <Portal2Index/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;