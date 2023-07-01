import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';
import Navigation from './components/Navigation/Navigation.tsx';

function App() {
    console.log('app');
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Navigation /><Home /></>} />
                <Route path='*' element={<><Navigation /><ErrorPage /></>} />
                <Route path='/projects' element={<><Navigation /><Projects /></>} />
                <Route path='/about' element={<><Navigation /><Home /></>} />
                <Route path='/education' element={<><Navigation /><Home /></>} />
                <Route path='/workExperience' element={<><Navigation /><Home /></>} />
                <Route path='/funFacts' element={<><Navigation /><Home /></>} />
                <Route path='/contact' element={<><Navigation /><Home /></>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;