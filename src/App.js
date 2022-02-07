import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import styled from 'styled-components';
import Home from '../src/Pages/Home';
import Team from '../src/Pages/Team';
import Calender from '../src/Pages/Calender';
import Documents from '../src/Pages/Documents';
import Tracker from '../src/Pages/Tracker';
import Sidebar from "./Sidebar";


const Pages = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #009FFD 30%, #FFA500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

function App() {

  return (
    <>
      <Sidebar />
      <Pages>
          <Routes>
            <Route path = "/" element = {<Home />}/> 
            <Route path = "/team" element = {<Team />}/>
            <Route path = "/calender" element = {<Calender />}/>
            <Route path = "/documents" element = {<Documents />}/>
            <Route path = "/tracker" element = {<Tracker />}/>
          </Routes>
      </Pages>
    </>
  );
}

export default App;
