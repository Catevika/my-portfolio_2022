import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NavBar from './components/navBar/NavBar';
import NoMatch from './components/noMatch/NoMatch';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<NavBar />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='contact' element={<Contact />} />
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
