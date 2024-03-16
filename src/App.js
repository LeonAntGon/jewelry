import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<Main/>} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
