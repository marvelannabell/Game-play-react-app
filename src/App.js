
import './App.css';
import { CreatePage } from './components/CreatePage/CreatePage';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (

    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
      <Routes>
        <Route path="/" element={ <Home />}/>
      </Routes>
      {/*Home Page*/}
     
      </main>


      {/* Login Page ( Only for Guest users ) */}
      {/* <Login /> */}
      {/* Register Page ( Only for Guest users ) */}
      {/* <Register /> */}
      {/* Create Page ( Only for logged-in users ) */}
      {/* <CreatePage /> */}

      {/* Edit Page ( Only for the creator )*/}

      {/*Details Page*/}

      {/* Catalogue */}

    </div>
  );

} 

export default App;
