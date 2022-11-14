import React from 'react';
import { Link } from 'react-router-dom';
import './noMatch.css';

export default function NoMatch() {
	const publicUrl = import.meta.env.VITE_PUBLIC_URL;
	return (
		<div className='card'>
			<p className='no-match-text'>Sorry,</p>
			<img src={publicUrl + 'no-match.jpg'} alt='' className='no-match-img' />
			<Link to='/'>
				<button title='Go to home page' className='no-match-btn'>
					Go back to home page
				</button>
			</Link>
		</div>
	);
}
