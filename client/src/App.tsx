import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <nav>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
