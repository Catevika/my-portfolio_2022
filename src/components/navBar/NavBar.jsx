import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RiHomeSmileFill, RiCloseLine } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { GrProjects, GrContact } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';
import './navBar.css';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(true);
	const toggleMenu = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	const publicFolder = import.meta.env.VITE_PUBLIC_URL;

	return (
		<header className='header-container'>
			<figure className='logo'>
				<img
					title='logo'
					className='logo-img'
					src={publicFolder + 'logo.png'}
					alt=''
				/>
				<figcaption className='logo-caption'>Catevika WebDev</figcaption>
			</figure>
			<a href='#main_content' className='skip-link'>
				Skip to content
			</a>
			{isOpen ? (
				<nav className='nav-container'>
					<ul className='nav-items'>
						<li className='nav-item'>
							<NavLink
								end
								to='/'
								title='Home'
								className={({ isActive }) => (isActive ? 'active-link' : '')}
							>
								<RiHomeSmileFill className='icon' />
								<span className='nav-title'>Home</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='about'
								title='About'
								className={({ isActive }) => (isActive ? 'active-link' : '')}
							>
								<FcAbout className='icon white-icon' />
								<span className='nav-title'>About</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='projects'
								title='Projects'
								className={({ isActive }) => (isActive ? 'active-link' : '')}
							>
								<GrProjects className='icon white-icon' />
								<span className='nav-title'>Projects</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='contact'
								title='Contact'
								className={({ isActive }) => (isActive ? 'active-link' : '')}
							>
								<GrContact className='icon white-icon' />
								<span className='nav-title'>Contact</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			) : null}
		</header>
	);
}
