
import './App.css';
import RoutesComponent from './Components/Routes/Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar/NavBar.js';
import { RespNavBar} from './Components/NavBar/NavBar/NavBar.js'
import FOoterStand from './Components/Footer/Footer';
import { useSelector } from 'react-redux';
import SideNavBar from './Components/NavBar/NavBar';
import AddReport from './Components/GlobalComponents/AddReport/AddReport';

function App() {

  const userSigned = useSelector(state => state.user.userId);
  
  console.log("User SIgned?",userSigned);
  console.log(useSelector(state=>state.user))
  return (
    <div className="App-Wrap">
       <Router>
      <div className={'NavDiv-InApp ' + userSigned? "" : " Hide" }>
     {/* { userSigned?
      <NavBar /> : null
     } */}
     {
      userSigned? <RespNavBar /> : null
     }
     
     </div>
     <div className='Content-InApp'>
      <div className="SNav-AppWrap">
     <SideNavBar/>
     </div>
     <div className='Content-MainWrapper'>
     
     <RoutesComponent/>
     {/* <div className='App-FooterWrap'>
     <FOoterStand/>
     </div> */}
     <AddReport />
     {/* <div className="OpaqueBackGround-fullscreen OpaqueBefore"></div> */}
     </div>
     </div>
     
    
     </Router>
    
    </div>
  ); 
}

export default App;
 