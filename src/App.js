import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Description from './Components/Description/Description';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    /*I entirely made this Project using only pure CSS*/
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Description/>
      <br/>
      <Projects/>
      <br/>
      <Contacts/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
