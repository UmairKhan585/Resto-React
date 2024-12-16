import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from './components/RestaurantList';
import RestaurantUpdate from './components/RestaurantUpdate';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList,faPlus,faSearch} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App"> 
    <Router>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#link"><Link to='/create'><FontAwesomeIcon icon={faPlus}/> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/list'><FontAwesomeIcon icon={faList}/> List</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/create' element={<RestaurantCreate/>}/>
        <Route path='/list' element={<RestaurantList/>}/>
        <Route path='/update/:id' element={<RestaurantUpdate/>}/>
      </Routes>
    </Router>
  </div>
  ); 
}

export default App;
