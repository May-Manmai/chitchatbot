import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About';
import Nav from 'react-bootstrap/Nav';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav justify variant='tabs' defaultActiveKey='/home'>
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
