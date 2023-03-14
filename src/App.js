import './App.css';

import { useEffect, useState } from 'react';


import { CreatePage } from './components/CreatePage/CreatePage';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Routes, Route } from 'react-router-dom'
import { Catalogue } from './components/Catalogue/Catalogue';
import { getAll } from './Services/gameServices';
import { DetailsPage } from './components/DetailsPage/DetailsPage';


function App() {
  const games = useGames()


  function useGames() {

    const [games, setGames] = useState([]);
    useEffect(() => {
      getAll()
        .then(result => {
          setGames(result)
          console.log(result);
        })
        .catch(err => {
          console.log('error' + err);
        })
    }, []);
    
    return games;
  }


  return (

    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/catalogue" element={<Catalogue games={games} />} />
          <Route path="/catalogue/:gameId" element={<DetailsPage games={games} />} />


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
