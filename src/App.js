import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Wrapper from './Components/Wrapper';
import ContactForm from './Components/ContactForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wrapper />} />
        <Route path='/contact' element={
          <>
          <Navbar/>
          <ContactForm />
          </>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
