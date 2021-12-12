import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './pages/LogIn';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <SignIn />

    </BrowserRouter>
  );
}

export default App;
