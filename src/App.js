import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/pages/About.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<Main/>} />
          <Route path='/nosotros' element={<About/>}/>
        </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
