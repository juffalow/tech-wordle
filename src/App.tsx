import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Menu />

      <main role="main" className="flex-shrink-0 main-container" style={{ marginTop: 25, marginBottom: 25 }}>
        <Home />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
