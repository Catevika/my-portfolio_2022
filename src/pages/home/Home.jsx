import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
	return (
		<section className='home-container'>
			<div className='home-content'>
				<p className='home-intro'>Hello, my name is</p>
				<h1 className='title-span'>
					<Link to='/about' className='home-link'>
						Dominique Bello
					</Link>
				</h1>
				<p>
					also kown as <span className='title-span'>Catevika</span>
				</p>
				<p className='home-intro home-text'>
					In search of a <strong>beautiful Website</strong>?
				</p>
				<p className='home-text'>
					Tell me your <strong>expectations</strong> in terms of&nbsp;
					<strong>UI&nbsp;&amp;&nbsp;UX</strong> and see it going&nbsp;
					<strong>live</strong>!
				</p>
				<button className='home-btn'>
					<Link to='/projects' className='home-link'>
						Recent projects
					</Link>
				</button>
			</div>
		</section>
	);
}
