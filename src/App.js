import './App.css';
import AppLogin from './Components/Common/AppLogin';
import SiteAppNav from './Components/Common/SiteAppNav';
import SiteFooter from './Components/Common/SiteFooter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      < SiteAppNav/>
      <div className='app-container'>

        <AppLogin/>
        
      </div>
      
      < SiteFooter/>
    </div>
  );
}

export default App;