import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import NoMatch from './components/noMatch/NoMatch';
import './App.css';

function BasicLayout() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<BasicLayout />} end>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='contact' element={<Contact />} />
				</Route>
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</div>
	);
}

export default App;
